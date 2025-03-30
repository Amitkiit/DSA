const { spawn } = require('child_process');

const dir = spawn('cmd.exe', ['/c', 'dir']); // Runs "dir" command on Windows

dir.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
});
