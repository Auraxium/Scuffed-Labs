import $ from 'jquery'
import {startGame, timeIV, controls} from '../main'
import axios from 'axios'
import {port} from './port'
import { v4 as uuidv4 } from 'uuid';

let audio;
let get = localStorage.getItem.bind(localStorage);
let set = localStorage.setItem.bind(localStorage);
let rmv = localStorage.removeItem.bind(localStorage);

async function getScores() {
  let {data: scores} = await axios(port + '/getScores')
  console.log(scores)
  return scores;
}

$('.title').on('click', e => {
  // e.stopPropagation()
})

$('#play').on('click', e => {
  console.log('playing');
  $('[menu]').hide()
  $('[ui]').show()
  startGame()
})

$('#lb').on('click', async e => {
  await getScores()
})

$('#login').on('click', e => {
  if(localStorage.getItem('account')) {
    //logic
    return;
  } 
  let uuid = uuidv4()
  localStorage.setItem('uuid', uuid);
  axios.post(port +'/oauth', {uuid: uuid, href: window.location.href})
  .then(res => window.location.href = res.data)
})

$('#logout').on('click', e => {
  localStorage.removeItem('account');
  window.location.reload()
})

$(document).on('click', e => {
  if(timeIV)
    controls.lock()
})

$(async () => {

  if(localStorage.getItem('uuid')) {
    let {data: account} = await axios.post(port + '/getToken', {uuid: localStorage.getItem('uuid')}).catch(err => null)
    localStorage.removeItem('uuid');
    
    if(!account || !account['username'])
      return;

    account['highscore'] = 0;  
    account['time_played'] = 0;  
    account['hits'] = 0;  

    localStorage.setItem('account', JSON.stringify(account));
    axios.post(port + '/saceAccount', account)
    $('#login').html(account.username)
    $('#logout').show()
  } else 

  if(localStorage.getItem('account')) {
    $('#login').html(JSON.parse(localStorage.getItem('account')).username);
    localStorage.removeItem('uuid');
    $('#logout').show()
  }

  audio = $('#audio')[0];
  audio.currentTime = localStorage.getItem('audio') || 0;
  audio.loop = true
  audio.volume = .5
  // audio.play()
})

$(window).on('unload', e => {
  localStorage.setItem('audio', audio.currentTime)
})