const mongoose = require('mongoose');
const app = require('./src/server.js');

// loads environment variables from the .env file. These variables are accesible through process.env
require('dotenv').config();


let dbURL = `${process.env.DB_URI}/${process.env.DB_NAME}`;

if (process.env.NODE_ENV === 'production') {
  dbURL += '?retryWrites=true&w=majority';
}

(async() => {
  try {
    await mongoose
      .connect(dbURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
      .then(() => console.log(`DB server connection successful: ${dbURL}`));
  } catch (err) {
    console.log(err);
  }
})();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running in '${process.env.NODE_ENV}' mode`)
  console.log(`API Server started: https://localhost:${port}.`);
});