import $ from "jquery";
import { startGame, timeIV, controls } from "../main";
import axios from "axios";
import  port  from "./port";
import { v4 as uuidv4 } from "uuid";

let audio;
let get = localStorage.getItem.bind(localStorage);
let set = localStorage.setItem.bind(localStorage);
let rvm = localStorage.removeItem.bind(localStorage);

async function getScores() {
  let { data: scores } = await axios(port + "/getScores");
  console.log(scores);
  return scores;
}

$(".title").on("click", (e) => {
  // e.stopPropagation()
});

$("#play").on("click", (e) => {
  console.log("playing");

  startGame();
});

$("#lb").on("click", async (e) => {
  $('[menu]').hide();
  $('#title-lb').show()

  let { data } = await axios(port + "/getScores");

  if(data.length > 9)
    data.length = 9;

  let board = data.sort((a, b) => b.score - a.score);
  console.log(board)

  let str = ''
  for (let i = 0; i < board.length; i++) {
    let el = board[i];

    str += `
      <div class="lb-score text-warning">
        <div class="me-3">${el.username}:</div>
        <div class="">${el.highscore}</div>
      </div>
    `;
  }

  $(".tlb-scores").html(str);
});

$("#retry").on("click", (e) => {
  startGame();
});

$("#quit").on("click", (e) => {
  location.reload();
});

$("#lb").on("click", async (e) => {
  await getScores();
});

$("#login").on("click", (e) => {
  if (localStorage.getItem("account")) {
    //logic
    return;
  }
  let uuid = uuidv4();
  localStorage.setItem("uuid", uuid);
  axios.post(port + "/oauth", { uuid: uuid, href: window.location.href }).then((res) => (window.location.href = res.data));
});

$("#logout").on("click", (e) => {
  localStorage.removeItem("account");
  window.location.reload();
});

$(document).on("click", (e) => {
  if (timeIV) controls.lock();
});

$(async () => {
  if (localStorage.getItem("uuid")) {
    let { data: account } = await axios.post(port + "/getToken", { uuid: localStorage.getItem("uuid") }).catch((err) => null);
    localStorage.removeItem("uuid");

    console.log(account);

    if (!account) return;

    if (!account["highscore"]) {
      account["highscore"] = 0;
      account["time_played"] = 0;
      account["hits"] = 0;

      localStorage.setItem("account", JSON.stringify(account));
      axios.post(port + "/saveAccount", account);
    }

    $("#login").html(account.username);
    $("#logout").show();
  } else if (localStorage.getItem("account")) {
    console.log("??????//");
    localStorage.removeItem("uuid");
    let acc = JSON.parse(get("account"));

    console.log("This is acc: in doc.ready");
    console.log(acc);

    let { data } = await axios.post(port + "/getAccount", acc);

    if (data) {
      let update = data;
      if (!update) return;

      set("account", JSON.stringify(update));
      $("#login").html(update.username);
      $("#logout").show();
    }

    // console.log('??????//')

    $("#login").html(acc.username);
    $("#logout").show();
  }

  audio = $("#audio")[0];
  audio.currentTime = localStorage.getItem("audio") || 0;
  audio.loop = true;
  audio.volume = 0.5;
  // audio.play()
});

$(window).on("unload", (e) => {
  localStorage.setItem("audio", audio.currentTime);
});
