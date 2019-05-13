const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4578f2ac31e9c0f40604f85eaf339a49/' + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast