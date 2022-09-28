const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  console.log(req.query)
  res.json({ status: 200, data: 'hello get method' })
})

app.post('/hello', (req, res) => res.json({ status: 200, data: 'hello post method'}))

app.listen(1000, () => console.log('server running on port: ' + 1000))