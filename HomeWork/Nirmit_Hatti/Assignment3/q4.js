async function fetchData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("User data fetched");
        // reject("Something went wrong");
      }, 2000);
    });
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
