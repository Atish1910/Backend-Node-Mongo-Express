
// Simulating an asynchronous operation
function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operation
    const operationSuccessful = Math.random() < 0.5;
    if (operationSuccessful) {
      resolve("Async operation result");
    } else {
      reject(new Error("Operation failed"));
    }
  });
}

// Async function to handle the asynchronous operation
async function handleAsyncOperation() {
  try {
    const result = await asyncOperation();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// Call the async function
handleAsyncOperation();


