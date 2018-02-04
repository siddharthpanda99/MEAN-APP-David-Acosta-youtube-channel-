const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {

  uri: 'mongodb://localhost:27017/' + this.db,
  secret: crypto,     //Really long complicted string that is used in tokens etc
  db: 'mean_test'
}
