const loading = document.getElementById("loading");
const randomList = ["/img/loading-min.GIF", "/img/loading2.gif"];
const num = Math.floor(Math.random() * randomList.length);
const printHtml = `<img src="${randomList[num]}" alt="ランダム画像">`;
loading.innerHTML = printHtml;

window.addEventListener("load", stopload);
setTimeout(stopload, 10000);

function stopload() {
  // imgがフェードアウトした後に#loadingがフェードアウトする
  $("#loading").delay(1500).fadeOut(800);
  $("#loading img").delay(1200).fadeOut(300);
}
