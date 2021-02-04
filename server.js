const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, './build')))

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})