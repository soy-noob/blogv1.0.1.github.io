body = document.getElementsByTagName("body")[0]

const fireworkBg = document.querySelector(".fireworkBg");
date = document.querySelector('.date');
titleBg = document.getElementById("titleBg");
articleBg = document.getElementById("articleBg");
modeBtn = document.getElementById("modeBtn");
modeBg = document.querySelector('.modeBg');
homeBtn = document.querySelector('.home');

foot = document.querySelector('.foot');
function firework(event) {
    var fireworks = [];
    var xspeeds = [];
    var yspeeds = [];
    var pos = [];
    for (var i = 0; i < 10; i++){
        f = document.createElement('div');
        f.setAttribute('class', 'firework');
        f.style.left = event.clientX.toString() + "px";
        f.style.top = (event.clientY).toString() + "px";
        if (nowColor == 1) f.style.backgroundColor = "black";
        if (nowColor == -1) f.style.backgroundColor = "white";
        var xSpeed = -5+Math.random() * 10;
        var ySpeed = -15 + (Math.random() * 15);
        var x = 0;
        var y = 0;
        pos.push([x, y]);
        xspeeds.push(xSpeed);
        yspeeds.push(ySpeed);
        fireworkBg.appendChild(f);
        fireworks.push(f);
    }
    var timer = 0;
    var grav = -0.45;
    var inter = setInterval(() => {
        for (var i = 0; i < fireworks.length; i++){
            yspeeds[i] = yspeeds[i] - grav;
            pos[i][1] += yspeeds[i];
            pos[i][0] += xspeeds[i];
            fireworks[i].style.transform = "Translate("+pos[i][0].toString()+"px,"+pos[i][1].toString()+"px)";
        }
        console.log("Y");
    }, 10);
    setTimeout(() => {
        for (var i = 0; i < fireworks.length;i++) {
            fireworkBg.removeChild(fireworks[i]);
        }
        clearInterval(inter);
    }, 1000);
}


var nowColor = 1;
function ChangeStyle() {
    nowColor = -nowColor;
    if (nowColor == 1) {
        body.style.backgroundColor = "white";
        modeBtn.style.backgroundColor = "white";
        titleBg.style.backgroundColor = "white";
        articleBg.style.backgroundColor = "white";
        articleBg.style.boxShadow = "0px 0px 10px 0px gray";
        titleBg.style.boxShadow = "0px 0px 10px 0px gray";
        date.style.color = "black";
        date.style.textShadow = "0px 0px 10px gray";
        foot.style.backgroundColor = "rgb(0, 119, 255)";
    }
    else {
        body.style.backgroundColor = "black";
        modeBtn.style.backgroundColor = "black";
        titleBg.style.backgroundColor = "rgba(225,225,225,0.8)";
        articleBg.style.backgroundColor = "rgba(225,225,225,0.8)";
        articleBg.style.boxShadow = "0px 0px 10px 0px white";
        titleBg.style.boxShadow = "0px 0px 10px 0px white";
        date.style.color = "white";
        date.style.textShadow = "0px 0px 10px white";
        foot.style.backgroundColor = "rgb(0, 55, 117)";
    }
    modeBtn.style.transform = 'translate(' + ((-nowColor+1) * 15).toString() + 'px,0)';
}

homeBtn.addEventListener("click", function () {
    window.location.href = "../../../index.html";
})

window.addEventListener("click", firework);
modeBg.addEventListener("click", ChangeStyle);

setInterval(() => {
    foot.style.bottom = (-articleBg.offsetTop-articleBg.scrollHeight-100).toString() + "px";
}, 100);