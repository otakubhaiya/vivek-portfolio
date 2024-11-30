"use client";
import { useEffect } from "react";
import * as THREE from "three";

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

const DirectionalLight = new THREE.DirectionalLight(0xffffff, 10);
const DirectionalLightHelper = new THREE.DirectionalLightHelper(
  DirectionalLight
);
DirectionalLight.position.set(0,3,5);
DirectionalLight.rotation.x = 1
scene.add(DirectionalLight, DirectionalLightHelper);

const light = new THREE.PointLight(0xffffff, 10);
light.position.set(0.8, 1.4, 1.0);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const DimondGeo = new THREE.IcosahedronGeometry();
const DimondMat = new THREE.MeshStandardMaterial({
  color: new THREE.Color("rgb(190,190,190)"),
  roughness: .5,
  metalness: .9,
});
const Dimond = new THREE.Mesh(DimondGeo, DimondMat);
scene.add(Dimond);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5.0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

export default function Canvas() {
  useEffect(() => {
    document.body.appendChild(renderer.domElement);
  }, []);

  return <></>;
}

function animate() {
  requestAnimationFrame(animate);
  Dimond.position.x = 3;

  Dimond.rotation.y += 0.01;
  Dimond.rotation.x += 0.01;

  render();
}

function render() {
  renderer.render(scene, camera);
}

animate();

// function RandAB(min: number, max: number) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
