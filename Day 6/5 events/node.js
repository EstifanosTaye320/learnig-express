var events = require("events");
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function (message) {
  console.log("event happended");
};

//Assign the event handler to an event:
eventEmitter.on("event", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("event");
