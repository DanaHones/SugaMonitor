var auth = require('../index').Auth

var clientId = 'p4VzZW3nTxeklmtOidZO6w'
var clientSecret = 'G1in6mg_RO2tjaCOby7sLg'  

auth.simple(clientId, clientSecret).then(function (client) {
  client.defaultSensorId().then(function (sensorId) {
    client.liveSamples(sensorId).then(function (samples) {
      console.log(samples)
    })
  })
})