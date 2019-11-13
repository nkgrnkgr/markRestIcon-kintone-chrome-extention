const url = "https://bozuman.cybozu.com/k/v1/records.json?app=43250&query=取得日%20in%20(TODAY())";

export default () => {
  fetch(url, {
    headers: { "X-Cybozu-Authorization": process.env.AUTH_KEY }
  })
    .then(response => response.json())
    .then(json => console.log(json));
};
