const fs = require('fs')

// writableStream stream creation 
const writeableStream = fs.createWriteStream('test.txt')

// Writing data in file 
writeableStream.write('11. Mozzam', ()=>{
    console.log('Done Writing');
})

// writableStream end 
writeableStream.end()

// Handling stream events
writeableStream.on("finish", () => {
    console.log('Writable stream ended!');
})

// Handling error events
writeableStream.on("error", (err)=>{
    console.log("Error Occurred: ", err);
})