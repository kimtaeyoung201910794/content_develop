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
