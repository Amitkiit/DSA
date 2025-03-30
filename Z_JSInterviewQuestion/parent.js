const { fork } = require('child_process');

const child = fork('../Z_JSInterviewQuestion/child.js'); // Create a child process

child.on('message', (message) => {
    console.log(`Parent received: ${message}`);
});

child.send('Start Calculation'); // Send a message to the child
