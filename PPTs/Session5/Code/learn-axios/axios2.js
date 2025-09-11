//POST Request with Axios
// Create a new post using Axios POST
axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Axios Post Example",
    body: "This post was created using Axios library.",
    userId: 101
  })
  .then(response => {
    console.log("New Post:", response.data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  