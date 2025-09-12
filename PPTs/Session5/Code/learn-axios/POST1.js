// Add a new user with POST request
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Pravin Jadhav",
    email: "pravin@example.com",
    username: "pravin24"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("New User Created:", data);
  })
  .catch(error => console.error("Error:", error));
