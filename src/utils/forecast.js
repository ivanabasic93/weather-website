const request  = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52f3119458749ff1693ef3eced793d01&query=' + longitude + ',' + latitude + '&units=m'
    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback(error, undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined,  '' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. ' + ' Feels like: ' + body.current.feelslike + '.' )
        }
    })
}

module.exports = forecast