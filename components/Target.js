import * as THREE from "three";
import { camera, speed, gameOver, scene, targets, timeIV } from "../main";
import $ from 'jquery'

const geometry = new THREE.SphereGeometry(1.5);
const material = new THREE.MeshStandardMaterial({ color: "#D22030" });

function Target() {
  let star = new THREE.Mesh(geometry, material);
  let now = Date.now()
  this.geo = star;
  this.animate = function animate() {
    let distance = camera.position.clone().sub(star.position);
    let m = camera.position.distanceTo(star.position);
    // console.log(star)

    if (m && m < 5 && m > -5 && Date.now() - now > 3000) {
      if($('.game-over').is(':visible'))
        return;
      console.log('this was the m: ' + m)
      scene.remove(star);
      gameOver();
      return;
    }

    let direction = distance.normalize();
    star.position.add(direction.multiplyScalar(speed));

    if(!star.parent)
      return star = null;

    requestAnimationFrame(animate);
    };
}

export function addTarget(
  scene,
  position = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(110))
) {
  let t = new Target();
  t.geo.position.set(...position);
  scene.add(t.geo);
  t.animate();
}
