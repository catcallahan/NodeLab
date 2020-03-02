let path = require('path');
let fs = require('fs');

let chirps = [
    { 
        chirp: "hello World",
        author: "James"
    }, 
    {
        chirp:"who dis?",
        author: "Bill"
    }, 
    {
        chirp:"what up everyone?",
        author: "Katie"
    }, 
    {
        chirp:"hey hey hey",
        author: "Heather"
    }, 
    {
        chirp:"hey ya'll!",
        author: "Sarah"}];

let newChirps = JSON.stringify(chirps)

let dataPath = path.join(__dirname, '../chirps.json');

fs.writeFile(dataPath, newChirps, err => {
    if(err) console.log(err);
});

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    let myChirps = JSON.parse(data);

    myChirps.forEach(element => {
        
        console.log(element.chirp)
    });
})