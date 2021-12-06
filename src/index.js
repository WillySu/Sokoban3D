const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

/** Resize canvas and camera */
function resize () {
  const { innerWidth, innerHeight } = window
  camera.aspect = innerWidth / innerHeight;
  camera.position.y = -128;
  camera.position.z = 128;
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.render(scene, camera);
}

function init () {
  resize();
  document.body.appendChild(renderer.domElement);

  const map = new SokobanMap({ scene, camera, renderer });
  map.render3D();

  
}

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resize);
