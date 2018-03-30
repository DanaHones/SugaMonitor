var auth = require('./lib/auth')
var client = require('./lib/client')

module.exports = {
  Auth: auth,
  Client: client
}

//var auth = require('neurio').Auth

var clientId = 'p4VzZW3nTxeklmtOidZO6w'
var clientSecret = 'G1in6mg_RO2tjaCOby7sLg'

console.log("Starting...");
auth.simple(clientId, clientSecret).then(function (client) {
  console.log(auth);
  client.defaultSensorId().then(function (sensorId) {
    client.liveSamples(sensorId).then(function (samples) {
      console.log(samples)
    })
  })
});