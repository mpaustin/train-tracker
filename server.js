const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.NODE_ENV || 3001;

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

app.listen(port, () => {
    console.log(`Train Tracker (React) listening on port ${port}`);
})