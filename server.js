import express from 'express'
const app = express()
import cors from 'cors'
import {google} from 'googleapis'

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "*",
    headers: "*",
  })
);

const googleID = ''
const googleCS = ''



app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

app.get('/test', (req, res) => {
  res.json({l: 'yes hi hello'})
})

app.get('/oauth', (req,res) => {

})

app.get('/callback', (req,res) => {

})

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log('running on port: ' + PORT));