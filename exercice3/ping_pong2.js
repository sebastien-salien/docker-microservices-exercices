const express = require('express')
const app = express()
const port = 3002
const fetch = require('node-fetch');
let route = ""
const address = "http://192.168.1.20"

app.get('/', (req, res) => {
  res.send('ping!')
})

app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
})



fetch(address + ":3003", {
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
    route = res.split(" ")[0]
  })
  .catch(res => {
  })

async function start() {
  setTimeout(function () {
    fetch(address + ":" + route, {
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
    start();
  }, 500)
}
start();
