// Delete a post with DELETE request
async function deletePost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("Post deleted successfully.");
    } else {
      console.log("Failed to delete post.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

deletePost();
