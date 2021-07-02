const express = require('express')
const app = express()
const port = 3001
const fetch = require('node-fetch');
let route="salut"

app.get('/', (req, res) => {
  res.send('pong!')
})

app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
})



fetch("http://localhost:3003", {
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
    route = res.split(" ")[1]
  })
  .catch(res => {
  })

  async function start(counter) {
    if (counter < 10) {
      setTimeout(function () {
        fetch("http://localhost:"+route, {
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
          })
        start(counter);
      }, 500)
    }
  }
  start(0);
