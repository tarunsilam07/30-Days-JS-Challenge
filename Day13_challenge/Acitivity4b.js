// Import the axios module
const axios = require('axios');

// Define the URL for the network request
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using axios
axios.get(url)
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error making the network request:', error);
  });
