async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Degree");
    }, 1000);
  });

  let blrWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20 Degree");
    }, 7000);
  });

  let delhiW = await delhiWeather;
  let blrW = await blrWeather;
  return [delhiW, blrW];
}

weather().then((x) => {
  console.log(x);
});
