// Update user info using PUT request
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    name: "Updated Pravin",
    email: "updatedpravin@example.com",
    username: "pravin_updated"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log("User Updated:", data);
  })
  .catch(error => console.error("Error:", error));
