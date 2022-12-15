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
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const data = frame.data;
  
    for (let i = 0; i < data.length; i += 4) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      if (green > 100 && red > 100 && blue < 43) {
        data[i + 3] = 0;
      }
    }
    this.ctx2.putImageData(frame, 0, 0);
  };
