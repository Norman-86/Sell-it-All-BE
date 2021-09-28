const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
