require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
