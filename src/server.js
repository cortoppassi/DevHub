const express = require('express');
const app = express();
const port = 3000;

const userRegistration = require('./routes/userRegistration');
const projectRegistration = require('./routes/ projectRegistration');

app.use('/', userRegistration);
app.use('/', projectRegistration);

app.listen(port, () => {
  console.log(`Servido rodando no http://localhost:${port}`)
})

module.exports = app;
