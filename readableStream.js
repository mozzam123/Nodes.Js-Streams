const fs = require("fs")

// Readable Stream Creation from File 
const readableStream = fs.createReadStream('test.txt', { encoding: 'utf-8' })

// 'data' events handling 
readableStream.on('data', (chunk) => {
    console.log(`Received a chunk of ${chunk} bytes of data.`);
});

// 'end' event handling 
readableStream.on('end', () => {
    console.log('Reached the end of the file…!');
});

// Errors handling 
readableStream.on('error', (err) => {
    console.error(`Error Occurred: ${err}`);
});