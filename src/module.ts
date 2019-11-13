const url = "https://bozuman.cybozu.com/k/v1/record.json?app=43250&id=307";

export default () => {
  console.log("hello");
  fetch(url, {
    headers: { "X-Cybozu-Authorization": "" }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};
