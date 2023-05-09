import $ from 'jquery'
import {startGame} from '../main'

let audio;

$('.title').on('click', e => {
  // e.stopPropagation()
})

$('#play').on('click', e => {
  console.log('playing');
  $('.title').hide()
  $('[ui]').show()
  startGame()
})

$(() => {
  audio = $('#audio')[0];
  audio.currentTime = localStorage.getItem('audio') || 0;
  audio.loop = true
  audio.play()
})

$(window).on('unload', e => {
  localStorage.setItem('audio', audio.currentTime)
})