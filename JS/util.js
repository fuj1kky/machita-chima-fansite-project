/**
 * jsonファイルを取り込む
 * @param {string} json_url fetchしたいjsonのurl
 * @return {object} Promise
 */
async function fetchJsonData(json_url) {
  try {
    const res = await fetch(json_url);
    const data = await res.json();
    return data;
  } catch {
    alert("エラー：\n以下のURLにアクセスできませんでした。\n" + json_url);
  }
}
