
const EventEmitter = require("events");

// Create an instance of EventEmitter class
const myEmitter = new EventEmitter();

// Register an event listener for the 'eventName' event
myEmitter.on("eventName", (arg1, arg2) => {
  console.log("Event occurred with arguments:", arg1, arg2);
});

// Emit the 'eventName' event with arguments
myEmitter.emit("eventName", "Arg 1", "Arg 2");

// Output: Event occurred with arguments: Arg 1 Arg 2

