const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2Ftcm95MjEwNiIsImEiOiJja3Btc3Jkem0wbDM5Mm9xcXJuNWdyeHVwIn0.Wn4yYZ1NbhVVYA_A6wUGnA&limit=1'

  request({ url, json: true}, (error, { body }) => {
    if(error) {
      callback('Unable to connect to location service!', undefined)
    } else if(body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
