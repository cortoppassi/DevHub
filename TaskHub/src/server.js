const express = require('express');
const app = express();
const port = 3000;

let userRegistration = require('./routes/userRegistration');


app.use('/', userRegistration);

app.listen(port, () => {
  console.log(`Servido rodando no http://localhost:${port}`)
})

module.exports = app;
