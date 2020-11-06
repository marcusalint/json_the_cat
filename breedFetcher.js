
const request = require('request');

const fetchBreedDescription = function(breedName, cb) {


  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    if (error) {
      cb(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);

    const breed = data[0];
 
    if (breed) {
      cb(null,breed.description);
    } else {
      cb(`Did not find breed ${breedName}`,null);
    }
  
  });
};
