import "./style.css";
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as player from'./player.js'
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import $ from 'jquery'

let PI = Math.PI;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let rote = 0;
const canvas = document.querySelector("#bg");
const controls = new THREE.PointerLockControls(camera, document.documentElement);
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0,0,30);
camera.rotateZ(Math.PI) 
// camera.rotateX(Math.PI) 

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(player.box)
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
	const geometry = new THREE.SphereGeometry(.25)
	const material = new THREE.MeshStandardMaterial({color: 0xffffff});
	const star = new THREE.Mesh(geometry, material)

	const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

	star.position.set(x,y,z);
	scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpeg')
scene.background = spaceTexture;

function animate() {

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.01;
	torus.rotation.z += 0.01;

	controls.update();

	// const angle = 0; // adjust this value to change the amount of rotation
	// const axis = new THREE.Vector3(0, 1, 0); // the axis to rotate around (in this case, the y-axis)
	// camera.rotateOnAxis(axis, 0.01);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

async function delay(secs) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(""), secs);
	});
}

//make a function

animate()


//scuffed debug
document.addEventListener('keydown', async (e) => {
	// console.log(e.key.toLowerCase())
	switch(e.key.toLowerCase()) {
		case 'm':
			console.log(camera.position)
			break;
		case 'n':
			console.log(player.box.position)
			break;
		case 'b':
			console.log(camera.rotation)
			break;
		case 'r':
			location.reload();
			break;
		case 'k':
			await $('canvas')[0].requestPointerLock({
				unadjustedMovement: true,
			});
			break;
			
			
	}
})

let xRotation = 0

// canvas.addEventListener('mousemove', function(event) {
// 	if (document.pointerLockElement === canvas) { // check if pointer lock is active
// 			const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
// 			const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

// 			const qx = new THREE.Quaternion();




// 			//console.log(movementY)
// 			// camera.rotation.z += movementX/1000
// 			// camera.rotation.y += clamp(movementX/2000, -1, 1)
// 			camera.rotation.x = clamp(camera.rotation.x + clamp(movementY/1000, -1, 1), -PI/2, PI/2)

// 			// camera.rotation.set( 0, movementY/1000, 0 );

// 			// Use the movementX and movementY values to rotate the camera or an object
// 	}
// });

// canvas.addEventListener('click', function() { 
// 	canvas.requestPointerLock();
// });

$(document).on('contextmenu', (e) => {
	$('canvas').css('cursor', 'auto')
})

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

document.body.requestPointerLock();
