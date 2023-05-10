import express from 'express'
const app = express()
import cors from 'cors'
import {google} from 'googleapis'
import axios from 'axios'

const hostUrl = process.env.HURL || 'http://localhost:9090'

const googleID = '808605773432-3qrasjkbl3sh8jc3p185u336v90pthb7.apps.googleusercontent.com'
const googleCS = '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'
const uri = 'mongodb+srv://scuffedlabs:xulq9FQcUlLQMxuq@cluster0.cxornph.mongodb.net/?retryWrites=true&w=majority'

const GOauth = new google.auth.OAuth2(
  googleID,
  googleCS,
   hostUrl+ "/callback"
);

let save = {}

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "*",
    headers: "*",
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

app.get('/test', (req, res) => {
  res.send('yes hi hello')
})

app.post('/oauth', (req,res) => {
  save[req.body.uuid] = {href: req.body.href};
  const url = GOauth.generateAuthUrl({
    access_type: 'offline',
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    include_granted_scopes: true,
    state: req.body.uuid,
  })
  res.send(url)
})

app.get('/callback', async (req,res) => {
  let state = req.query.state;
  let response = await GOauth.getToken(req.query.code);
  let ax = await axios(
    "https://people.googleapis.com/v1/people/me?personFields=names",
    {
      headers: {
        Authorization: `Bearer ${response.tokens.access_token}`,
      },
    }
  );
  save[state]["googleId"] = ax.data.names[0].metadata.source.id;
  save[state]["username"] = ax.data.names[0].displayName;
  save[state]["now"] = Date.now();
  res.redirect(save[state]["href"]);
})

app.post('/getToken', (req, res) => {
  let token = save[req.body.uuid];
  console.log(token);
  delete save[req.body.uuid];
  return res.json(token);
})

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log('running on port: ' + PORT));