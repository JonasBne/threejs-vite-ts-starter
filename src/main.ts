import './style.css'
import * as THREE from 'three';

// initiate a scene
const scene = new THREE.Scene();

// basic mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00})
const mesh = new THREE.Mesh(geometry, material);

const sizes = {
    height: 600,
    width: 600,
}

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000);
camera.position.z = 3;

// add mesh and camera to the scene
scene.add(mesh, camera);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementsByClassName('webgl')[0]
});

renderer.render(scene, camera);
