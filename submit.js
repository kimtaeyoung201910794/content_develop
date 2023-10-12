

function submitlogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let username1 = username;
    let password1 = password;

    
    let usernamelength = username1.length;
    let passwordlength = password1.length;
    
    console.log(username);
    console.log(password);
    if (
        localStorage.getItem("username") == username && localStorage.getItem("password") == password) 
        {
        document.getElementById("btnbox").innerHTML='<div>로그인이 되셨습니다! <br /><a href="./shop.html">사이트 쇼핑하러 가기</a></button> <br />'+'아이디의 길이는:' +usernamelength+'비밀번호의 길이는:'+passwordlength;
        
    }
    else {
        document.getElementById("btnbox").innerHTML = '로그인에 실패하셨습니다.<br /> 다시 입력해주세요';
    }
}



