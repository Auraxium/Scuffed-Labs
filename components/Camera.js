import * as THREE from 'three'
import { Quaternion } from 'three';
import { PointerLockControls } from "./PointerLockControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import {timeIV} from '../main'

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new PointerLockControls(camera, $("#bg")[0] );

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

$(document).on('click', e => {
	if(timeIV) controls.lock()
})

export {camera, controls}
