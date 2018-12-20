const fs = require('fs');

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
    let date = new Date().toLocaleString('en-US');
    let ip = req.ip;
    var log = `Time: ${date} || IP: ${ip} || Method: ${req.method} || URL: ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log', log + '\n');
    next();
});

app.get('/lib', (req, res) => {
    res.send({
        title: "Library"
    
    });
});

app.get('/', (req, res) => {
    res.send({
        name: "Duy",
        age: 20,
        hobbies: [
            "playing sport", "listening to music"
        ]
    });
});

app.get('/about', (req, res) => {
  res.send({
      fullname: "Pham Ngoc Huy Duy",
      college: "TDC",
      phone: "0707250846"
  });
});



app.listen(port, () => {
    console.log(`Server is on localhost:${port}`);
});
