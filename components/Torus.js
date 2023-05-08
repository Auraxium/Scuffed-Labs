import * as THREE from "three";

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });

export default function(position) {
const torus = new THREE.Mesh(geometry, material);

	this.geo = torus;
	this.position = position;
	this.animate = function animate() {
		torus.rotation.x += 0.01;
		torus.rotation.y += 0.01;
		torus.rotation.z += 0.01;
  	requestAnimationFrame(animate);
	}
}