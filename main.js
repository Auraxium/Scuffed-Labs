import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as player from "./components/player.js";
import { FirstPersonControls } from "three/addons/controls/FirstPersonControls.js";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import Stats from "stats.js";
import $ from "jquery";
let {log} = console;

const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

let PI = Math.PI;

//scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new PointerLockControls(camera, document.body);
const raycaster = new THREE.Raycaster();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 50, -100);

renderer.render(scene, camera);

// const spaceTexture = new THREE.TextureLoader().load("space.jpeg");
// scene.background = spaceTexture;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

let geometry = new THREE.BoxGeometry(50, 2, 50);
let material = new THREE.MeshStandardMaterial({ color: 0x383838 });
const plane = new THREE.Mesh(geometry, material);
plane.position.set(0, -20, 0);
scene.add(plane);
//
geometry = new THREE.TorusGeometry(10, 3, 16, 100);
material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

scene.add(player.box);
// const controls = new OrbitControls(camera, renderer.domElement)

//adds targets
Array(20).fill().forEach(addStar);

function addStar() {
  const geometry = new THREE.SphereGeometry(1.5);
  const material = new THREE.MeshStandardMaterial({ color: "#D22030" });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y + 50, z - 100);
  scene.add(star);
}

//updates game at 60 fps
async function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  stats.update();

  // await delay(1000/60)
  // animate()
}

animate();

let targets = [];
getTargets()
// let positions = [[0, 50, -100], [10, 100, 70], [-80, -60, -30]]
let positions = [[0, 50, -100], [0, 50, -105], [-0, 50, -110]]
let pc = 0;

function getTargets() {
	scene.traverse((obj) => {
		if (obj.isMesh && obj.geometry.type == "SphereGeometry") {
			targets.push(obj);
		}
	});
}

async function delay(secs) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), secs);
  });
}
let time = 0;

function timeTick() {
	time++;
	$('.timer').html(() => {
		let m, s;
		m = Math.floor(time / 60)
		s = Math.floor(time % 60)
		console.log()
		if(s < 10)
			s = '0' + s
		return `${m+':'+s}`
	})
}

let timeIV = setInterval(timeTick, 1000)

//scuffed debug
document.addEventListener("keydown", async (e) => {
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
    case "k":
      if (targets.length) {
        scene.remove(targets[0]);
        targets.splice(0, 1);
        $(".score").html("Score: " + ++score);
      }
      break;
		case ".":
			pc++
			camera.position.set(positions[pc][0],positions[pc][1],positions[pc][2]);
		  pc = (pc > 2) ? 0:pc; 
			log(pc)
			break;
  }
});

document.addEventListener("click", function () {
  controls.lock();
});

let score = 0;

document.addEventListener("click", function () {
  raycaster.setFromCamera(new THREE.Vector2(), camera);

  // Find the closest object that the Raycaster intersects
  const intersects = raycaster.intersectObjects(scene.children, true);

  // Log the object that the Raycaster intersects
  if (intersects.length > 0) {
    let mesh = intersects[0].object;
    // console.log(mesh)
    if (mesh.geometry.type == "SphereGeometry") {
      scene.remove(mesh);
      targets.splice(0, 1);
			$(".score").html("Score: " + ++score);
    }
    if (score >= 20) $(".score").append(" win");
  }
});

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

document.body.requestPointerLock();
