const fs = require('fs');
const path = require('path');
fs.readFile(
    path.join(__dirname, 'posts', 'blogpost.txt'),
    'utf-8',
    (err, data) => {
        if(err){
            console.log('file read error');
        }
        console.log(data);
        const content = Buffer.from(data);
        console.log(data);
    }
)