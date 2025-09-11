async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPosts();
