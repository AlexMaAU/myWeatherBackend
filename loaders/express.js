const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('../app/routes/v1/weatherRouter');
const userRouter = require('../app/routes/v1/userRouter');
const config = require('../app/config');
const connectToDB = require('../app/utils/db');

const app = express();
app.use(helmet());

connectToDB().then(() => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Express server started at https://myweatherbackend-g23m-dev.fl0.io:', config.port);
  });
});

module.exports = () => {
  app.use(cors());
  app.use(express.json());
  app.use(config.api.prefix + '/auth', userRouter);
  app.use(config.api.prefix, apiRouter); 
  return app;
};
