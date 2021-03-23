const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_ACCESS_KEY}&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          response.body.current.temperature +
          " with " +
          response.body.current.weather_descriptions[0] +
          ". There is a " +
          response.body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
