const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0aba4cb03cf32a8e853f936d0bef0eef&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to weather services')
        } else if(body.error) {
            callback('Unable to find location')
        }else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike,
                humidity: body.current.humidity
            })
        }
    })
}

module.exports = forecast