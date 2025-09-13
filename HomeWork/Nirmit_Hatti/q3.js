function getData() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    console.log(num);
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve("Data loaded successfully");
      } else {
        reject("Failed to load data");
      }
    }, 2000);
  });
}

getData()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));
