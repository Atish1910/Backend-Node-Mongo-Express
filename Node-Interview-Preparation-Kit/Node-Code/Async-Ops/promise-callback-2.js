
// Asynchronous operation with promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched" };
      // Success by resolving the Promise
      resolve(data);
    }, 2000); // Simulating a delay of 2 seconds
  });
}
console.log("Before calling fetchDataWithPromise");

// Using the Promise
fetchDataWithPromise()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("After calling fetchDataWithPromise");

