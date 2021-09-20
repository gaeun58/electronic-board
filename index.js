const nick = "즐거운 추석 보내세요";
const text = document.getElementById("text");
let i = 0;

function showAtOnce() {
    setInterval(function () {
        if (i < nick.length) {
            text.append(nick[i]);
            i++;
        }
      }, 200);
}

function showOneByOne() {
    if (i < nick.length) {
        text.append(nick[i]);
    }
    i++;
}