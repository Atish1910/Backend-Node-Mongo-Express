
// import events module
const EventEmitter = require('events');

// Create an instance of EventEmitter class
const myEmitter = new EventEmitter();

// Register an event listener(eventName)
myEmitter.on('eventName', () => {
  console.log('Event occurred');
});

// Emit the event
myEmitter.emit('eventName');

// Output: Event occurred






