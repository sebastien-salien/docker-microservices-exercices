const express = require('express')
const app = express()
const port = 3003

const data = "3001 3002"

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
})

