let path = require('path');
let fs = require('fs');
let request = require('request');

let redditArray = []

let dataPath = path.join(__dirname, "./popular-articles.json")

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if(err) console.log(err);
    JSON.parse(body).data.children.forEach(element => {
        let articles = {title: element.data.title, url: element.data.url, author: element.data.author}
        redditArray.push(articles);
       
    });
let redditJson = JSON.stringify(redditArray)
    fs.writeFile(dataPath, redditJson, err => {
        if(err) console.log(err)
    })
    });
    


