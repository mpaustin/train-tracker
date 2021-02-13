const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3001;

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

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('fAAYhg75OIeOiE_8JXX0Aod-e7AbKDjKsD_Y7NE_mf4.j_v_L8rrcyRQmuz522XRsY32cG0YFQz3QyeQ8nP2XEI')
})

app.listen(port, () => {
    console.log(`Train Tracker (React) listening on port ${port}`);
})