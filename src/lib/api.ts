const origin = "https://bozuman.cybozu.com";
const dayOffTodayUserApiUrl = `${origin}/k/v1/records.json?app=43250&query=取得日%20in%20(TODAY())`;
const usersApiUrl = `${origin}/v1/users.json`;

export default () => {
  const options = {
    headers: { "X-Requested-With": "XMLHttpRequest" }
  };
  return fetch(dayOffTodayUserApiUrl, options)
    .then(response => response.json())
    .then(json => {
      const records = json.records;
      const size = records.length;
      if (size === 0) {
        return {};
      }
      let qsCodes = "";
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        qsCodes = qsCodes + `codes[${i}]=${record["登録者"].value[0].code}&`;
      }
      return fetch(
        `${usersApiUrl}?${qsCodes}size=${size}`,
        options
      ).then(response => response.json());
    })
    .then(json => {
      return json;
    });
};
