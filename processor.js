const processor = {};

processor.doLoad = function doLoad() {
    const video = document.getElementById("video");
    this.video = video;
  
    this.c1 = document.getElementById("c1");
    this.ctx1 = this.c1.getContext("2d");
  
    this.c2 = document.getElementById("c2");
    this.ctx2 = this.c2.getContext("2d");
  
    video.addEventListener(
      "play",
      () => {
        this.width = video.videoWidth / 2;
        this.height = video.videoHeight / 2;
        this.timerCallback();
      },
      false
    );
  };

  processor.timerCallback = function timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
      this.timerCallback();
    }, 0);
  };

  processor.computeFrame = function () {
    main();
  };

  function main() {
    const canvas = document.querySelector('#c1');
    const renderer = new THREE.WebGLRenderer({canvas});
  
    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;
  
    const scene = new THREE.Scene();
  
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    function render(time) {
      time *= 0.001;  // convert time to seconds
  
      cube.rotation.x = time;
      cube.rotation.y = time;
  
      renderer.render(scene, camera);
  
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  
  }