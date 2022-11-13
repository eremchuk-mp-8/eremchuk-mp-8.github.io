document.querySelector('#get-access').addEventListener('click', async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: {
                //Use the back camera
                      exact: 'environment'
                    }
        }
      })
      const videoTracks = stream.getVideoTracks()
      const track = videoTracks[1]
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