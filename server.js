const  express = require("express") ;
const app = express();
const cors = require("cors") ;
const { google } = require("googleapis") ;
const axios = require("axios") ;
const mongoose = require("mongoose") ;
const p = console.log;
const { fileURLToPath } = require('url') ;
const { dirname } = require('path') ;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// console.log(__dirname)

const uri = "mongodb+srv://scuffedlabs:xulq9FQcUlLQMxuq@cluster0.cxornph.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const accountModel = mongoose.model("Score", new mongoose.Schema({ _id: {}, data: {} }));

const hostUrl = process.env.HURL || "http://localhost:9090";

const googleID = "808605773432-3qrasjkbl3sh8jc3p185u336v90pthb7.apps.googleusercontent.com";
const googleCS = "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";

const GOauth = new google.auth.OAuth2(googleID, googleCS, hostUrl + "/callback");

let save = {};

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "*",
    headers: "*",
  })
);

app.use(express.static(__dirname + '/dist'));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/test", (req, res) => {
  res.send("yes hi hello");
});

app.get("/getScores", async (req, res) => {
  accountModel.find().then((scores) => res.json(scores));
});

app.post("/getAccount", async (req, res) => {
  console.log("this is getAccount:");
  console.log(req.body);
  accountModel.findById(req.body._id).then((acc) => {
    if (!acc) return res.send(null);
    let {username, time_played, hits, highscore} = acc['data'];
    res.json({
      _id: req.body._id,
      username: username,
      time_played: time_played,
      highscore: highscore,
      hits: hits,
    })
  });
});

app.post("/saveAccount", (req, res) => {
  let { _id, username, time_played, highscore, hits } = req.body;
  let save = {
    username: username,
    time_played: time_played,
    highscore: highscore,
    hits: hits,
  };

  accountModel.findById(_id).then((acc) => {
    console.log(" this is wut u did:");
    console.log(save);
    if (!acc) {
      let init = new accountModel({ _id: _id, data: save });
      init
        .save()
        .then(() => res.send("done"))
        .catch((err) => {
          console.log(err.data);
          res.send("failed");
        });
    } else {
      acc.data = save;
      acc
        .save()
        .then(() => res.send("done"))
        .catch((err) => {
          console.log(err.data);
          res.send("failed");
        });
    }
  });
});

app.post("/oauth", (req, res) => {
  save[req.body.uuid] = { href: req.body.href };
  const url = GOauth.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"],
    include_granted_scopes: true,
    state: req.body.uuid,
  });
  res.send(url);
});

app.get("/callback", async (req, res) => {
  let state = req.query.state;
  let response = await GOauth.getToken(req.query.code);
  let ax = await axios("https://people.googleapis.com/v1/people/me?personFields=names", {
    headers: {
      Authorization: `Bearer ${response.tokens.access_token}`,
    },
  });
  console.log(ax);

  save[state]["_id"] = ax.data.names[0].metadata.source.id;
  save[state]["username"] = ax.data.names[0].displayName;

  let acc = await accountModel.findById(ax.data.names[0].metadata.source.id);
  p("gomell");
  p(acc);

  if (acc) {
    if (acc.data) acc = acc.data;
    save[state]["username"] = acc.username;
    save[state]["highscore"] = acc.highscore;
    save[state]["hits"] = acc.hits;
    save[state]["time_played"] = acc.time_played;
  }

  res.redirect(save[state]["href"]);
});

app.post("/getToken", (req, res) => {
  let token = save[req.body.uuid];
  delete token["href"];
  console.log(token);
  delete save[req.body.uuid];
  return res.json(token);
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log("running on port: " + PORT));
