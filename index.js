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

/* 클릭 시 글자 색이 변하는 메세지
let nickName = "무지개메세지";
let count = 0;
let color = ['red','blue','green','yellow','orange','purple']
function showName(){
    if(count >= nickName.length){
        return;
    }
    document.getElementsByClassName('name')[0].innerHTML += nickName[count];
    document.getElementsByClassName('name')[0].style.color = color[count++];
}
*/