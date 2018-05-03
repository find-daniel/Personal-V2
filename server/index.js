require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
