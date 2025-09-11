// Update a post with PUT request
async function updatePost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 5,
        title: "Updated Post Title",
        body: "This post has been updated using PUT request.",
        userId: 1
      })
    });

    let updatedPost = await response.json();
    console.log("Post Updated:", updatedPost);
  } catch (error) {
    console.error("Error:", error);
  }
}

updatePost();
