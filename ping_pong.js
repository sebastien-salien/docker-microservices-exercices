const express = require('express')
const app = express()
const port = 5372
const fetch = require('node-fetch');

app.get('/', (req, res) => {
  res.send('pong!')
})


app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
})

function start(counter) {
  if (counter < 10) {
    setTimeout(function () {
      fetch("http://localhost:4567", {
        method: 'GET',
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          return res.text();
        })
        .then(res => {
          console.log(res)
        })
        .catch(res => {
          console.log("Exception : ", res);
        })
      start(counter);
    }, 500)
  }
}
start(0);