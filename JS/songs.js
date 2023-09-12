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
            <button type="button" class="songs-content-body-thumb" value="${songObj.videoId}">
              <img
                class="songs-content-body-thumb-img"
                src="https://img.youtube.com/vi/${songObj.videoId}/maxresdefault.jpg"
                loading="lazy"
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

  // buttonにイベントリスナーをつける
  const thumbs = document.getElementsByClassName("songs-content-body-thumb");
  for (let thumb of thumbs) {
    thumb.addEventListener("click", replaceThumbWithYTPlayer);
  }

  function replaceThumbWithYTPlayer(e) {
    const videoId = this.value;

    // 挿入するhtml文を作成
    const html = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        class="songs-content-body-thumb-img"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>`;

    // buttonの前に挿入し、button自身を削除
    this.insertAdjacentHTML("beforebegin", html);
    this.remove();
  }
})();
