const names = ["Andrew", "jim", "jess"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Philadelphia", () => {
  console.log(data);
});
