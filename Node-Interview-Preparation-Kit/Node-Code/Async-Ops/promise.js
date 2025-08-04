
// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { message: "Data fetched" };
      resolve(data);
    }, 2000); // Simulating a delay of 2 seconds
  });
}
console.log("Before calling fetchData");

// Using the Promise
fetchData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
console.log("After calling fetchData");

// Output:
// Before calling fetchData
// After calling fetchData
// Data: { message: 'Data fetched' }


