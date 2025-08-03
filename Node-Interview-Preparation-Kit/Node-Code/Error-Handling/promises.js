const asyncOperationPromise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  if (operationSuccessful) {
    resolve(result);
  } else {
    reject(new Error("Operation failed"));
  }
});

asyncOperationPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
