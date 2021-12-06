const RENDER_CONTEXT_2D = '2d';
const RENDER_CONTEXT_3D = '3d';
const CUBE_SIZE = 12;

class SokobanMap {
  constructor (options = {}) {
    const {
      width = 256,
      height = 256,
      numOfRow = 12,
      numOfCol = 12,
      cellWidth,
      cellHeight,
      cubeMatrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ],
      camera,
      scene,
      renderer
    } = options

    this.cellWidth = cellWidth || (width / numOfRow);
    this.cellHeight = cellHeight || (height / numOfCol);
    this.width = this.cellWidth * numOfRow;
    this.height = this.cellHeight * numOfCol;
    this.numOfRow = numOfRow;
    this.numOfCol = numOfCol;
    this.cubeMatrix = cubeMatrix;
    this.group = new THREE.Group();
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
  }

  render2D () {
    // Not support
  }

  render3D () {
    if (this.scene) {
      for (let row = 0; row < this.numOfRow; row++) {
        for (let col = 0; col < this.numOfCol; col++) {
          const cube = new SokobanCube({
            scene: this.group,
            x: CUBE_SIZE * row,
            y: CUBE_SIZE * col,
            z: 0
          });
          cube.render();
        }
      }
      this.group.position.x = -(CUBE_SIZE * this.numOfRow / 2);
      this.group.position.y = -(CUBE_SIZE * this.numOfCol / 2);

      this.scene.add(this.group);
      renderer.render(scene, camera);
    }
  }

  render (context = RENDER_CONTEXT_3D) {
    if (context === RENDER_CONTEXT_2D) {
      return this.render2D();
    }

    return this.render3D();
  }
}
