// Fetch a list of users from an API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Users:", data);
  })
  .catch(error => console.error("Error:", error));
