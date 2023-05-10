import $ from 'jquery'
import {startGame} from '../main'
import axios from 'axios'
import {port} from './port'
import { v4 as uuidv4 } from 'uuid';

let audio;

$('.title').on('click', e => {
  // e.stopPropagation()
})

$('#play').on('click', e => {
  console.log('playing');
  $('[menu]').hide()
  $('[ui]').show()
  startGame()
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

$(async () => {
  if(localStorage.getItem('uuid')) {
    let account = await axios.post(port + '/getToken', {uuid: localStorage.getItem('uuid')}).catch(err => null)
    localStorage.removeItem('uuid');
    console.log(account);
    if(!account || !account['data']['username'])
      return;
    localStorage.setItem('account', JSON.stringify(account['data']));
    $('#login').html(account.username)
    $('#logout').show()
  }

  if(localStorage.getItem('account')) {
    $('#login').html(JSON.parse(localStorage.getItem('account')).username);
    localStorage.removeItem('uuid');
    $('#logout').show()
  }

  audio = $('#audio')[0];
  audio.currentTime = localStorage.getItem('audio') || 0;
  audio.loop = true
  // audio.play()
})

$(window).on('unload', e => {
  localStorage.setItem('audio', audio.currentTime)
})