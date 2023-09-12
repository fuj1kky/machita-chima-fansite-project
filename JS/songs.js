(async () => {
  // songsのデータを取ってくる
  const data = await fetchJsonData("../json/songs.json");

  // 挿入するhtml文を作成
  // dataが.reverse()で破壊されないためにスプレッド構文を使う
  const html = [...data]
    .reverse()
    .map((songObj) => {
      return `
      <li class="songs-content">
        <h3 class="songs-content-title icon">${songObj.title}</h3>

        <div class="songs-content-body">
          <button type="button" class="songs-content-body-thumb">
            <img
              class="songs-content-body-thumb-img"
              src="https://img.youtube.com/vi/${songObj.videoId}/maxresdefault.jpg"
            />
          </button>

          <table class="songs-content-body-info">
            ${songObj.info
              .map(([key, value]) => {
                return `
                <tr>
                  <th>${key}</th>
                  <td>${value}</td>
                </tr>`;
              })
              .join("")}
          </table>
        </div>
      </li>`;
    })
    .join("");

  //　HTML書き出し
  document.getElementById("songsContents").innerHTML = html;
})();
