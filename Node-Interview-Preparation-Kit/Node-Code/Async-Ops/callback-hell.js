
// Example of callback hell
asyncFunction1((error1, result1) => {
  if (error1) {
    console.error("asyncFunction1:", error1);
  } else {
    asyncFunction2(result1, (error2, result2) => {
      if (error2) {
        console.error("asyncFunction2:", error2);
      } else {
        asyncFunction3(result2, (error3, result3) => {
          if (error3) {
            console.error("asyncFunction3:", error3);
          } else {
            // Further nested callbacks...
          }
        });
      }
    });
  }
});

