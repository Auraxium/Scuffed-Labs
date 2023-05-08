import * as THREE from "three";
import { camera, speed } from "../main";

const geometry = new THREE.SphereGeometry(1.5);
const material = new THREE.MeshStandardMaterial({ color: "#D22030" });

function Target() {
  const star = new THREE.Mesh(geometry, material);
  this.geo = star;
  this.animate = function animate() {
    const distance = camera.position.clone().sub(star.position);
    const direction = distance.normalize();
    star.position.add(direction.multiplyScalar(speed));
    requestAnimationFrame(animate);
  };
}

export function addTarget(
  scene,
  position = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(150))
) {
  let t = new Target(position);
  t.geo.position.set(...position);
  scene.add(t.geo);
  t.animate();
}
