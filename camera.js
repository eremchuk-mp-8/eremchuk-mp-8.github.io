document.querySelector('#get-access').addEventListener('click', async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          minAspectRatio: 1.333,
          minFrameRate: 30,
          width: 1280,
          heigth: 720,
        },
        audio: false
      })
      const videoTracks = stream.getVideoTracks()
      console.log(videoTracks)
      const track = videoTracks[0]
      alert(`Getting video from: ${track.label}`)
      document.querySelector('video').srcObject = stream
      document.querySelector('#get-access').setAttribute('hidden', true)
  //The video stream is stopped by track.stop() after 3 second of playback.
      //setTimeout(() =&gt; { track.stop() }, 3 * 1000)
    } catch (error) {
      alert(`${error.name}`)
      console.error(error)
    }
  })