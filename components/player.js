// Un used
import * as THREE from "three";

let c = 0
export let position = [0, 0, 0]

export let move = {
	forward: 0,
	side: 0,
}

const geometry = new THREE.BoxGeometry(5,5,5,5);
const material = new THREE.MeshStandardMaterial({ color: 0x8f6347 });
export const box = new THREE.Mesh(geometry, material);

// scene.add(box)

function animate() {
	box.position.x += move.side
	// box.position.y += .1
	box.position.z += move.forward

  requestAnimationFrame(animate);
}

animate()

document.addEventListener('keydown', (e) => {
	// console.log(e.key.toLowerCase())
	switch(e.key.toLowerCase()) {
		case 'w':
			move.forward = 1
			break;
		case 'a':
			move.side = 1
			break;
		case 's':
			move.forward = -1
			break;
		case 'd':
			move.side = -1
			break;			
	}
})

document.addEventListener('keyup', (e) => {
	switch(e.key.toLowerCase()) {
		case 'w':
			move.forward = 0
			break;
		case 'a':
			move.side = 0
			break;		
		case 's':
			move.forward = 0
			break;	
		case 'd':
			move.side = 0
			break;	
	}
})

export function m() {console.log(move)} 