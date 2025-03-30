/* 1. What is a Child Process?
Imagine you have one cook (your Node.js program) in a kitchen, making pizzas, burgers, and pasta. If the cook does everything alone, it will take a lot of time.

Solution? 👨‍🍳👩‍🍳
Hire more cooks (child processes) to help and work in parallel! Each cook will take a task and complete it faster.

In Node.js, a child process is like hiring extra cooks to help the main cook. These child processes run separately and do different tasks at the same time.

2. Why Do We Need Child Processes?
Normally, Node.js is single-threaded, meaning it can do only one task at a time. If one task takes too long (like making pizza 🍕), the other tasks (making burgers 🍔) have to wait.

But if we create child processes, they can work at the same time, making things faster! 🚀

3. How Do We Use Child Processes in Node.js?
Node.js has a built-in module called child_process. You can use it to create new child processes.

Step 1: Import the Child Process Module
javascript
Copy
Edit
const { spawn, exec, fork } = require('child_process');
There are four ways to create child processes:
1️⃣ spawn() – Runs system commands.
2️⃣ exec() – Runs system commands and gives output.
3️⃣ execFile() – Runs a file.
4️⃣ fork() – Runs another Node.js script (best for Node.js applications).

4. Example: Using spawn() to Run a System Command
Scenario: Suppose you want to list all files in a folder (ls command in Linux/macOS or dir in Windows).

📌 Code Example:

javascript
Copy
Edit
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh']); // Runs the "ls -lh" command
ls.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
});
ls.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});
ls.on('close', (code) => {
    console.log(`Process exited with code ${code}`);
});
🔹 This starts a new process that runs the ls -lh command in your system.
🔹 The output is printed when the command completes.

5. Example: Using fork() for Node.js Processes
Scenario: Suppose you want to create a child process that calculates a sum.

📌 Step 1: Create a child process file (child.js)

javascript
Copy
Edit
process.on('message', (message) => {
    console.log(`Child Process received: ${message}`);
    
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) { // Simulate heavy work
        sum += i;
    }

    process.send(`Sum is ${sum}`); // Send result back to parent
});
📌 Step 2: Create the main process (parent.js)

javascript
Copy
Edit
const { fork } = require('child_process');

const child = fork('./child.js'); // Create a child process

child.on('message', (message) => {
    console.log(`Parent received: ${message}`);
});

child.send('Start Calculation'); // Send a message to the child
🔹 The parent process creates a child process using fork().
🔹 The child process does heavy calculations and sends the result back.
🔹 This prevents blocking the main thread and makes your program faster!

6. How Child Processes Handle More Tasks?
Think of a restaurant again:

Without child processes: One cook does all tasks one by one.
With child processes: Many cooks work together, making food faster.
Example:
If you need to process 1000 users’ data, instead of using one process, you can create 4-8 child processes to handle it in parallel.

7. When to Use Child Processes?
✅ Heavy calculations (e.g., finding prime numbers, sorting large data)
✅ Multiple API requests (e.g., calling external services)
✅ Running system commands (e.g., ls, ping, curl)
✅ Processing files (e.g., reading & converting PDFs, images, videos)

8. Conclusion
Child processes help Node.js do multiple tasks at the same time.
They prevent the main thread from blocking.
They are useful for CPU-heavy tasks like calculations & file processing.A */