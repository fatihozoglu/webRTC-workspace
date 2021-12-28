const playVideoFromCamera = async () => {
  try {
    const constraints = { video: true };
    // Gain access to the users camera
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    // Select the HTML video element
    const videoElement = document.querySelector("video");
    // Set the srcObject property of HTML video element as the stream coming from user's camera
    videoElement.srcObject = stream;
  } catch (err) {
    console.error("Error:", err);
  }
};

playVideoFromCamera();
