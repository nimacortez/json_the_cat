const fetchBreed = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreed(breedName, (error, description) => {
  if (error) {
    console.log(`Error details: ${error}`);
  } else {
    console.log(description);
  }
});