const { Duplex } = require('stream');

const duplex = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        if (this.currentCharCode > 100) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplex.currentCharCode = 75;

process.stdin.pipe(duplex).pipe(process.stdout);
