
// Asynchronous operation with a callback
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { message: "Data fetched" };
        // Success by invoking the callback
        callback(null, data);
    }, 2000); // Simulating a delay of 2 seconds
}
console.log("Before calling fetchDataWithCallback");

// Using the callback
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

console.log("After calling fetchDataWithCallback");



