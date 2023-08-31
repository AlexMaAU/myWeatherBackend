const mongoose = require('mongoose');
const config = require('../config');

const connectToDB = async () => {
  const connectionString = config.db_connect;
  if (!connectionString) {
    console.log('CONNECTION_STRING is not set');
    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('error', (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on('connected', () => {
    console.log('Connected to database');
  });
  db.on('disconnected', () => {
    console.log('Disconnected from database');
    process.exit(3);
  });

  return mongoose.connect(connectionString)
};

module.exports = connectToDB