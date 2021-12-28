//Get 'audioinput'/'audiooutput'/'videoinput' kind devices
const getConnectedDevices = (type, callback) => {
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    const filtered = devices.filter((device) => device.kind === type);
    callback(filtered);
  });
};

// Get video cameras
getConnectedDevices("videoinput", (item) => console.log("Cameras: ", item));

// // Get audio inputs
getConnectedDevices("audioinput", (item) => console.log("Microphones: ", item));

// // Get audio outputs
getConnectedDevices("audiooutput", (item) => console.log("Speakers: ", item));
