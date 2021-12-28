// Openning media devices
const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

try {
  const stream = openMediaDevices({ video: true, audio: true });
  console.log("Success: ", stream);
} catch (err) {
  console.error("err", err);
}

// Promise Version
// const constraints = {
//   'video': true,
//   'audio': true
// }
// navigator.mediaDevices.getUserMedia(constraints)
//   .then(stream => {
//       console.log('Got MediaStream:', stream);
//   })
//   .catch(error => {
//       console.error('Error accessing media devices.', error);
//   });
