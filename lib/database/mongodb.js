const mongoose = require('mongoose')

class MongoDB {
  static openDatabase(connectString = null, callback){
    let database_options = {
      replset: {
        socketOptions: {
          connectTimeoutMS: 300000, // 5 minutes
          keepAlive: 120
        },
        ha: true, // Make sure the high availability checks are on
        haInterval: 10000, // Run every 10 seconds
      }
    }
    mongoose.connect(connectString, database_options, err => {
      if (err) throw Error('Open database failed')
      console.log('Database is opening')
      if (callback) return callback()
    })

    mongoose.connect(envConfig.app.db, connectionOptions, function (err) {
      if (err) winstonLogger.error(err);
    });
    mongoose.connection.on('connecting', function () {
      console.log('Connecting to MongoDB...');
    });
    mongoose.connection.on('connected', function () {
      console.log('MongoDB connected!');
    });
    mongoose.connection.on('open', function () {
      console.log('MongoDB connection opened!');
    });
    mongoose.connection.on('error', function (err) {
      console.error(err);
      mongoose.disconnect();
    });
    mongoose.connection.on('disconnected', function () {
      console.error('MongoDB disconnected!');
      mongoose.connect(envConfig.app.db, connectionOptions, function (err) {
        if (err) console.error(err);
      });
    });
    mongoose.connection.on('reconnected', function () {
      console.log('MongoDB reconnected!');
    });
    mongoose.connection.on('close', function () {
      console.error('MongoDB closed');
    });
    if (mongoose.connection.db.serverConfig.s.replset) {
      mongoose.connection.db.serverConfig.s.replset.on('ha', function(type, data) {
        console.log('replset ha ' + type);
      });
      mongoose.connection.db.serverConfig.s.replset.on('timeout', function () {
        console.error('MongoDB timeout');
      });
    }
  }
}
module.exports = MongoDB
