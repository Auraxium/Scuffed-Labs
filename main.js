//#region INIT
import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as player from "./components/player.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import Stats from "stats.js";
import $ from "jquery";
import Torus from "./components/Torus";
import { addTarget } from "./components/Target";
import "./components/MenuEvents";
import axios from "axios";
import port from "./components/port";
import { camera, controls } from "./components/Camera";

// const stats = new Stats();
// stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom);

//#endregion

//#region SCENE SETUP

let PI = Math.PI;
let p = console.log;

let get = localStorage.getItem.bind(localStorage);
let set = localStorage.setItem.bind(localStorage);
let rmv = localStorage.removeItem.bind(localStorage);

const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();
const renderer = new THREE.WebGLRenderer({ canvas: $("#bg")[0] });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

camera.position.set(0, 50, -100);
camera.rotation.set(-2.7095338077918627, 0.01597627537694578, 3.1342261956640667);

renderer.render(scene, camera);

const spaceTexture = new THREE.TextureLoader().load("space.jpeg");
// scene.background = spaceTexture;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

let geometry = new THREE.BoxGeometry(50, 2, 50);
let material = new THREE.MeshStandardMaterial({ color: 0x383838 });
const plane = new THREE.Mesh(geometry, material);
plane.position.set(0, -20, 0);
scene.add(plane);

addTorus([0, 0, 0]);

// scene.add(player.box);

//updates game at 60 fps
function animate() {
  requestAnimationFrame(animate);

  // fpscontrols.update();
  // controls.update();

  renderer.render(scene, camera);
  // stats.update();
}

animate();

//#endregion

//#region GAME

let score = 0;
let pc = 0;
let time = 0;
let targets = [];
let timeIV;
let speed = 0.1;
let count = 10;
let name = localStorage.getItem("account") ? JSON.parse(get("account")).username : "YOU";

let positions = [
  [0, 50, -100],
  [10, 100, 70],
  [-80, -60, -30],
];

let rotations = [
  [3.1294898990744757, -0.13039790361064346, 3.140018872872886],
  [-0.2546460804929257, 0.07047449746912259, 0.01832705546224618],
  [1.849602546449333, -0.7145598994559652, 1.9826623581145912],
];

_x: _y: _z: 1.9826623581145912;

//#endregion

//#region FUNCTIONS

function getTargets() {
  scene.traverse((obj) => {
    if (obj.isMesh && obj.material.color.getHex() === 0xd22030) {
      targets.push(obj);
    }
  });
}

function hitTarget(mesh) {
  // console.log(mesh)
  if (mesh.geometry.type == "SphereGeometry") {
    scene.remove(mesh);
    targets.pop();
    $(".score").html("Score: " + ++score);
    if (targets.length == 0) {
      moveLocation();
    }
    console.log(targets.length);
  }
  // if (score >= 20) $(".score").append(" win");
}

function moveLocation() {
  camera.position.set(...positions[++pc % 3]);
  camera.rotation.set(...rotations[pc % 3]);
  speed += 0.05;
  Array(++count)
    .fill()
    .forEach(() => addTarget(scene));
  getTargets();
}

function startGame() {
  $("[menu]").hide();

  // scene.traverse((obj) => {
  //   if (obj.isMesh && obj.material.color.getHex() === 0xd22030) {
  //     scene.remove(obj);
  //   }
  // });

  targets = [];
  score = 0;
  speed = 0.1;
  count = 10;
  timeIV = setInterval(timeTick, 1000);
  time = 0;
  pc = 0;
  camera.position.set(...positions[0]);
  camera.rotation.set(...rotations[0]);

  Array(count)
    .fill()
    .forEach(() => addTarget(scene));

  $("[menu]").hide();
  $("[ui]").show();
  $(".score").html("Score: 0");
  controls.lock();
  // $('#bg')[0].requestPointerLock();
  getTargets();
  // $("#audio")[0].play();
  $("#audio")[0].volume = 0.3;
}

async function gameOver() {
  if (!timeIV) return;
  if (!speed) return;

	$("[menu]").hide();

  p("game over");
  speed = 0;
  clearInterval(timeIV);
  timeIV = null;
  controls.unlock();

  $(".game-over").css("display", "flex");

  // scene.traverse((obj) => {
  //   if (obj.isMesh && obj.material.color.getHex() === 0xd22030) {
  //     scene.remove(obj);
  //   }
  // });

  targets.forEach((mesh) => scene.remove(mesh));
  targets = [];

  let account;

  if (get("account")) {
    account = JSON.parse(get("account"));
    account["time_played"] += time;
    account["hits"] += score;
    if (account["highscore"] < score) account["highscore"] = score;
    set("account", JSON.stringify(account));
    await axios.post(port + "/saveAccount", account);
  }

  let rank = { username: name, highscore: score, gold: true };
  let { data: b } = await axios(port + "/getScores");
  let data = b.map((el) => el.data);

  if (data.length > 9) data.length = 9;

  let board = [...data, rank].sort((a, b) => b.score - a.score);
  console.log(board);
  let str = "";
  let gold;
  for (let i = 0; i < board.length; i++) {
    let el = board[i];

    if (el["gold"]) gold = i;

    str += `
      <div class="lb-score" id="ls${i}">
        <div class="me-3">${el.username}:</div>
        <div class="">${el.highscore}</div>
      </div>
    `;
  }

  $("#scores").html(str);
  if (gold) $(`#ls${gold}`).addClass("text-warning");

  console.log(data);
}

function addTorus(position) {
  let t = new Torus(position);
  scene.add(t.geo);
  t.animate();
}

async function delay(secs) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), secs);
  });
}

function timeTick() {
  time++;
  $(".timer").html(`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

//#endregion

//#region LISTENERS

document.addEventListener("pointerdown", function () {
  raycaster.setFromCamera(new THREE.Vector2(), camera);

  // Find the closest object that the Raycaster intersects
  const intersects = raycaster.intersectObjects(scene.children, true);

  // Log the object that the Raycaster intersects
  if (intersects.length > 0) {
    hitTarget(intersects[0].object);
  }
});

let speedsave = 0;

function setter(x, y) {
  return (x = y);
}

$(".resume").on("click", (e) => {
	p('run resume')
	controls.lock()
  // speed = speedsave;
  // timeIV = setInterval(timeTick, 1000);
	// controls.lock()
  // $("[menu]").hide();
});

//scuffed debug
document.addEventListener("keydown", async (e) => {
  // p(e.key)
  switch (e.key.toLowerCase()) {
    case "m":
      console.log(camera.position);
      break;
    case "n":
      console.log(player.box.position);
      break;
    case "b":
      console.log(camera.rotation);
      break;
    case "r":
      location.reload();
      break;
    case "v":
      speed = 1;
      break;
    case "escape":
			
      break;
    case "k":
      if (targets.length) {
        hitTarget(targets[0]);
      }
      break;
    case ".":
      camera.position.set(...positions[++pc % 3]);
      camera.rotation.set(...rotations[pc % 3]);
      break;
  }
});

document.addEventListener("click", function () {
  if($('[menu]:visible').length === 0) controls.lock();
});

//#endregion

export { camera, speed, gameOver, scene, startGame, targets, timeIV, speedsave, setter };
