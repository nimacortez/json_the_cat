const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    callback(error, null);
  } if (data[0]) {
    callback(null, data[0].description);
  } else {
    callback(`Could not locate breed ${breed}`, null);
  }
});
};

const printBreed = function(error, data) {
  console.log(data);
}

fetchBreedDescription("Chartreux", printBreed)