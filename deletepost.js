const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, '/posts', 'blogpost.txt'),(err) => {
    if(err){
        console.log('No such file is present');
        return;
    }
    console.log('file deleted');
});