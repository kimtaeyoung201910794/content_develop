var value = document.getElementById("temperatures");
console.log(value);

var date = document.getElementById("date_box");
let stringDate = new Date();

function showDate() {
    let stringDate = new Date();
    const date = document.getElementById("dateText");
    date.innerHTML='현재시각은'+stringDate.toLocaleString()+'입니다.';
}

function mathcheck() {
    function randomInt() { 
         return Math.floor(Math.random()*9) + 1;
    }
    let ques = randomInt() + "*" + randomInt();
    
    let user = prompt(ques + " 값은 얼마입니까?", 0); 
    if(user == null) { 
    document.write("구구단 연습을 종료합니다"); 
    }
    else {
        let ans = eval(ques);  
        if(ans == user) 
            prompt("정답! "); 
        else
            prompt("아니오! "); document.write(ques + "=" + "<strong>" + ans+ "</strong>입니다<br>");
        }
    
}

function cl() {
let p = document.getElementById("firstP");
let text = "운동을 해야하는 이유 \n현대문명의 편리한 발달은 우리의 생활방식을 크게 바꿔놓았다. \n자동화된 생활에 의존해 ‘신체활동’이 크게 줄고 있는 것. \n1980년부터 조사된 경제기획원 조사통계국의 사인별 질병통계 보고에 의하면 매년 심장혈관계 질환이 1위를 차지하고 있으며, \n불의의 사고를 제외한 6대 사인이 모두 개인의 운동부족과 밀접한 관계가 있는 ‘성인병’이라는 점에 주목해야 한다.\n인간의 몸은 원래 많은 신체활동을 하면서 신체기관의 기능이 유지되거나 향상되게 돼 있다. \n운동하면 심폐기능과 폐 기능이 향상되고, 관절은 부드러워지며 뼈의 무기질 감소를 지연시켜 뼈를 튼튼하게 해준다. \n또한 운동은 혈액량이 증가하고 혈액의 점도가 낮아지면서 동맥을 젊은 상태로 유지해주고, 중성지방과 체지방을 감소시킨다.";
alert(text);
}

function change()
{
let span = document.getElementById("mySpan");
span.style.color = "green"; 
span.style.fontSize = "100px"; // 글자 크기는 30픽셀
span.style.width = "6em"; // 
span.style.border = "3px dotted magenta"; // 3픽셀 점선 magenta 테두리
span.style.margin = "20px"; // 상하좌우 여백 20px
span.style.textAlign="center";
}

function changeOB(obj, size, color, value) {
    obj.style.color = color;
    obj.style.fontSize = size;
    obj.value = value;
    }

function changeLetter() {
        let spanArray = document.getElementsByTagName("span");
        for(let i=0; i<spanArray.length; i++) {
        var span = spanArray[i];
        span.style.color = "orchid";
        span.style.fontSize = "20px";
        }
        }

let win=null;
function showHTML() {
    if(win == null || win.closed)
    win = window.open("", "outWin", "width=300,height=200");
    let textArea = document.getElementById("srcText");
    win.document.open();
    win.document.write(textArea.value);
    win.document.close();
    }
function createDIV() {
    let obj = document.getElementById("parent");
    let newDIV = document.createElement("div");
    newDIV.innerHTML = "tyshop은 운동용품들을 검색하고 찾아볼수있는 웹 서비스입니다.";
    newDIV.setAttribute("id", "myDiv");
    newDIV.style.backgroundColor = "grey";
    newDIV.style.fontSize="50px";
    newDIV.style.padding="60px";
    newDIV.onclick = function() {
    let p = this.parentElement; // 부모 HTML 태그 요소
    p.removeChild(this); // 자신을 부모로부터 제거
    };
    obj.appendChild(newDIV);
}


const value = changeOB.value;

function game() {
    var arr = new Array();
    arr[0] = "가슴운동에서 가장 기초적인 운동은? a.스쿼트 b.데드리프트 c.벤치프레스";
    arr[1] = "운동후에 섭취하여야하는 영양소는? a.단백질 b.니코틴 c.알코올";
    arr[2] = "3대 영양소중 에너지에 가장 많이 쓰이는 것은? a.단백질 b.지방 c.탄수화물";
    arr[3] = "3대 운동이라고 불리우는 운동중 아닌것은? a.스쿼트 b.바벨컬 c.벤치프레스";

    const main = getElementById("question_main");
    const letter = getElementById("question_letter");
    const number = Math.floor(Math.random() * 5);

    main.innerHTML='다음 문제의 정답을 고르세요!';
    letter.innerHTML=arr[number];

    const a = getElementById('a_btn');
    const b = getElementById('b_btn');
    const c = getElementById('c_btn');

    if(number == 0) {
        if(value == 'c') {
            getElementById('answer').innerHTML='정답입니다'
        }
        else {
            getElementById('answer').innerHTML='오답입니다'
        }
    }
    else if(number == 1) {
        if(value == 'a') {
            getElementById('answer').innerHTML='정답입니다'
        }
        else {
            getElementById('answer').innerHTML='오답입니다'
        }
    }
    else if(number == 2) {
        if(value == 'b') {
            getElementById('answer').innerHTML='정답입니다'
        }
        else {
            getElementById('answer').innerHTML='오답입니다'
        }
    }
    else if(number == 3) {
        if(value == 'b') {
            getElementById('answer').innerHTML='정답입니다'
        }
        else {
            getElementById('answer').innerHTML='오답입니다'
        }
    }

}