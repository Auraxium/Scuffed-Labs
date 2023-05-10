import $ from 'jquery'
import {startGame} from '../main'
import axios from 'axios'
import {port} from './port'

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
  if(localStorage.getItem('Account')) {
    //logic
    return;
  } 
  axios.get(port +'/')
  console.log(port)
})

$(() => {
  audio = $('#audio')[0];
  audio.currentTime = localStorage.getItem('audio') || 0;
  audio.loop = true
  // audio.play()
})

$(window).on('unload', e => {
  localStorage.setItem('audio', audio.currentTime)
})