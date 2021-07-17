const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");
const tiles = document.querySelectorAll(".image-container > li");

let isPlaying = false;
//타이머 변수
let timeInterval = null;
let time = 0;
const dragged = {
    el: null,
    class: null,
    index: null
}

// 카운트다운
startButton.addEventListener("click", () => {
    setGame()
})
function setGame() {
    timeInterval = setInterval(() => {
        time++
        playTime.innerText = time;
    }, 1000);
    const gameTiles = shuffle(tiles);
    console.log(gameTiles)
}

//랜덤
function shuffle(array) {
    let index = array.length -1;
    while(index > 0) {
        const randomIndex = Math.floor(Math.random()*(index+1))
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
        index--;
    }
    return array;
}

function checkStatus() {
    clearInterval(timeInterval)
}

container.addEventListener("dragstart", (e) => {
    const obj = e.target;
    console.log({obj})
    dragged.el = obj;
    dragged.class = obj.className; //console.log의 타겟에서 className: "list0" 확인 가능
    dragged.index = [...obj.parentNode.children].indexOf(obj)
    // console.log(e)
})
container.addEventListener("dragover", (e) => {
    // console.log(e)
    e.preventDefault() //drop의 실행을 막기 때문에 막아주는 역할
})
container.addEventListener("drop", (e) => {
    // console.log(e.target)
    const obj = e.target;
    // obj.before(dragged.el);
    let originPlace;
    let isLast = false;
    if (dragged.el.nextSibling) {
        originPlace = dragged.el.nextSibling;
    } else {
        originPlace = dragged.el.previousSibling;
        isLast = true;
    }
    const droppedIndex = [...obj.parentNode.children].indexOf(obj)
    dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el) //드롭한 대상
    isLast ? originPlace.after(obj) : originPlace.before(obj) //드롭당한 대상을 원래위치로
})