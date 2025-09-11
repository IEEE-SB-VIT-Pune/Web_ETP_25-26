//GET Request with Axios
// Import Axios (for Node.js) OR include via CDN in HTML
// const axios = require("axios"); // Node.js

// Simple GET request using Axios
import axios from "axios";
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log("Users:", response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });