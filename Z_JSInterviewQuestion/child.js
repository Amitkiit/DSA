process.on('message', (message) => {
    console.log(`Child Process received: ${message}`);
    
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) { // Simulate heavy work
        sum += i;
    }

    process.send(`Sum is ${sum}`); // Send result back to parent
});


// 4. Step-by-Step Explanation
// 1️⃣ The parent process (parent.js) creates a child process using fork().
// 2️⃣ The parent process sends a message "Hello, Child!" using child.send(...).
// 3️⃣ The child process (child.js) listens for the message using process.on('message', callback).
// 4️⃣ The child receives the message and logs it (Child received: Hello, Child!).
// 5️⃣ The child sends a message back to the parent using process.send(...).
// 6️⃣ The parent process listens for the message using child.on('message', callback).
// 7️⃣ The parent logs the received message (Parent received: Hello, Parent!)