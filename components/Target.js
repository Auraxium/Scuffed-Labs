import * as THREE from "three";
import { camera, speed, gameOver, scene, targets } from "../main";

const geometry = new THREE.SphereGeometry(1.5);
const material = new THREE.MeshStandardMaterial({ color: "#D22030" });

function Target() {
  const star = new THREE.Mesh(geometry, material);
  this.geo = star;
  this.animate = function animate() {
    const distance = camera.position.clone().sub(star.position);
    const meshBox = new THREE.Box3().setFromObject(star, new THREE.Vector3(0.5, 0.5, 0.5));
    const cameraBox = new THREE.Box3().setFromCenterAndSize(camera.position, new THREE.Vector3(0.5, 0.5, 0.5));

    if (meshBox.intersectsBox(cameraBox)) {
      gameOver();
      scene.remove(star);
      return;
    }

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
  let t = new Target();
  t.geo.position.set(...position);
  scene.add(t.geo);
  t.animate();
}
