
try {

  // Synchronous operation that may throw an error
  throw new Error("Synchronous error");

} catch (error) {

    // Handle the error
  console.error("Error caught:", error.message); 

} finally {

    // Code that runs regardless of whether an 
  // error occurred or not
  console.log("Finally block executed"); 

}

// Output: Error caught: Synchronous error
// Output: Finally block executed

