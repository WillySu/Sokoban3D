class SokobanCube {
  constructor (options = {}) {
    const {
      width = 12,
      height = 12,
      depth = 12,
      scene,
      x = 0,
      y = 0,
      z = 0
    } = options

    this.scene = scene;
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    // this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube = new THREE.Mesh(this.geometry);
    this.cube.position.x = x;
    this.cube.position.y = y;
    this.cube.position.z = z;
  }

  render () {
    this.scene.add(this.cube);
  }
}