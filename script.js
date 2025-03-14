// Réduction de la navbar au scroll
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

// Initialisation de Three.js pour l'animation 3D
function init3D() {
  let container = document.getElementById("3d-container");

  // Création de la scène
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Création d'un cube 3D
  let geometry = new THREE.BoxGeometry();
  let material = new THREE.MeshStandardMaterial({ color: 0x007bff });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Lumière
  let light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(5, 5, 5);
  scene.add(light);

  // Position de la caméra
  camera.position.z = 2;

  // Animation du cube
  function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
  }

  animate();
}

// Lancement de l'animation 3D après chargement de la page
window.onload = init3D;
