import { getConnectedDevices } from "./getConnectedDevices";
import { openMediaDevices } from "./openMediaDevices";

const cameras = getConnectedDevices("videoinput");

// Define constraints parameter for openMediaDevices function
const constraints = {
  audio: { echoCancellation: true },
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
};

if (cameras && cameras.length > 0) {
  // Open video camera with a resolution of 1280x720 pixels
  const stream = openMediaDevices(constraints);
  console.log("Success:", stream);
}
