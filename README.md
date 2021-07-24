# Puzzle Game 만들기
## 익힌 기능
- 드래그 이벤트
- 스프레드 오퍼레이터 [...]

---
- 드래그 이벤트의 e를 console.log로 출력해서 console의 해당 부분을 열어 보면 target이 드래그를 시작한 지점, path가 드래그 끝나는 지점이다.

---
```
function shuffle(array) {
    let index = array.length -1;
    const randomIndex = Math.floor(Math.random()*(index+1))
    while(index > 0) {
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]] //배열 랜덤 섞기
        index--;
    }
    return array;
}
```
randomIndex를 while문 안에 넣어서 오류가 났었다.

처음엔 뭐가 문제인지 몰라서 당황하고 많이 헤맸는데 오류 문구를 읽어보니 randomIndex의 위치의 문제라는 것을 알아차리고 수정 할 수 있었다.

또 오류 문구에서 코드의 몇번째 줄이 오류인지도 알려준다는 것을 알게되었다.