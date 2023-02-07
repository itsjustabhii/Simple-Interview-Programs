let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

//then is going to be called when promise resolves successfully
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
