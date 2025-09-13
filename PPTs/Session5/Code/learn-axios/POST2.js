// Add a new post with POST request
async function createPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My First Post",
        body: "This is a test post created using fetch POST request.",
        userId: 101
      })
    });

    let post = await response.json();
    console.log("Post Created:", post);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();
