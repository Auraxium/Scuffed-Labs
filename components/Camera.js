import * as THREE from 'three'
import { Quaternion } from 'three';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let rotation = new THREE.Quaternion();
let phi = 0;
let theta = 0;
let xCurrent = 0;
let yCurrent = 0;
let xLast = 0;
let yLast = 0;
let sens = .9

function updateCam() {
	requestAnimationFrame(updateCam)
	const xh = (xCurrent - xLast) * sens;
	const yh = (yCurrent - yLast) * sens;

	// console.log(`x: ${xh} | y: ${yh}`)

	phi += -xh * 1;
	theta = clamp(theta + -yh*1, -Math.PI / 3, Math.PI / 3)

	const rotationQuaternion = new THREE.Quaternion();
	rotationQuaternion.setFromEuler(new THREE.Euler(0, phi, 0, 'YXZ'));
	
	// Apply the rotation to the camera
	camera.setRotationFromQuaternion(rotationQuaternion);

	xLast = xCurrent
	yLast = yCurrent
}

updateCam()

document.addEventListener('pointermove', e => {
	xCurrent = clamp(e.movementX || e.mozMovementX || e.webkitMovementX || 0, -3, 3);
	yCurrent = clamp(e.movementY || e.mozMovementY || e.webkitMovementY || 0, -3, 3);
	// console.log(`x: ${xCurrent} | y: ${yCurrent}`)
})


function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}



export {camera, updateCam}
