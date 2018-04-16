const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.enable('trust proxy');

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log({ "Live": port });
});
