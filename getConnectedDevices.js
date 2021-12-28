//Get 'audioinput'/'audiooutput'/'videoinput' kind devices
export const getConnectedDevices = async (type) => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === type);
};

// Get video cameras
try {
  const cameras = getConnectedDevices("videoinput");
  console.log("Cameras:", cameras);
} catch (err) {
  console.error("Error:", err);
}

// Get audio inputs
try {
  const microphones = getConnectedDevices("audioinput");
  console.log("Microphones:", microphones);
} catch (err) {
  console.error("Error:", err);
}

// Get audio outputs
try {
  const speakers = getConnectedDevices("audiooutput");
  console.log("Speakers:", speakers);
} catch (err) {
  console.error("Error:", err);
}
