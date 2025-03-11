const mongoose = require('mongoose');
const { MONGO_URL, NODE_ENV } = require('./server.config');

async function ConnectToDB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(MONGO_URL);
      console.log('connected to db success')
    }
  } catch (err) {
    console.log('err in connecting DB')
    console.log(err)
  }
}

module.exports = ConnectToDB;