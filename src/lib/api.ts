const origin = "https://bozuman.cybozu.com";
const dayOffTodayUserInRegistrationAppApiUrl = `${origin}/k/v1/records.json?app=43250&query=取得日%20in%20(TODAY())%20and%20勤怠%20in%20("終日休")%20and%20ステータス%20=%20"登録"`;
const dayOffTodayUserInHolidayShiftAppApiUrl = `${origin}/k/v1/records.json?app=5177&query=
    ((振替休日取得日休日%20%3D%20TODAY()%20and%20振替休日変更取得日と異なる場合%20%3D%20"")%20or%20(振替休日変更取得日と異なる場合%20%3D%20TODAY()))
    %20and%20ドロップダウン%20not%20in%20("0.5日(半日)")%20and%20ステータス%20in%20("承認",%20"休日出勤済",%20"振休取得済")`;
const usersApiUrl = `${origin}/v1/users.json`;

export default () => {
  const options = {
    headers: { "X-Requested-With": "XMLHttpRequest" }
  };
  return Promise.all([
    fetch(dayOffTodayUserInRegistrationAppApiUrl, options),
    fetch(dayOffTodayUserInHolidayShiftAppApiUrl, options)
  ])
    .then(response => {
      return Promise.all([response[0].json(), response[1].json()]);
    })
    .then(jsons => {
      const record1 = jsons[0].records;
      const record2 = jsons[1].records;
      return [...record1, ...record2];
    })
    .then(records => {
      // const records = json.records;
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
