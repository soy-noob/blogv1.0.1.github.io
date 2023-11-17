import { CreateNewItem } from "./articles/utils.js";

var items;
var list = document.querySelector(".list");
var scroll = document.querySelector('.scroll');
var delta = 0
var scrollHeight = 660;
var handleSize = 100;
let itemMoveMaxY;
var maxScrollHeight = scrollHeight-handleSize;
let handle = document.getElementById("handle");
let mouseStartY;
let isDraging = false;
let handleStartY = 0;
const itemHeight = 50;
let deltaY = 0;

var seleIndex = 0;

// var sourceJSON = {
//     "articles":[{
//         "link":"./articles/Source/article01/article01.html",
//         "title":"JetBrains全家桶安装和破解"
//     },
//     {
//         "link":"./articles/Source/article02/article02.html",
//         "title":"Adobe全家桶破解版下载"
//     },
//     {
//         "link":"./articles/Source/article03/article03.html",
//         "title":"Aesprite像素绘画软件破解版下载"
//     }
//     ]
// }

// var toolUsageJSON = {
//     "articles":[{
//         "link":"./articles/ToolUsage/article01/article01.html",
//         "title":"JetBrains编辑器如何自定义背景"
//     }
//     ]
// }

function RefreshItems() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    var aimJson;
    switch (seleIndex) {
        case 0:
            aimJson = "./Source.json";
            break;
        case 1:
            aimJson = "./Tutorial.json";
            break;
        case 2:
            aimJson = "./FrontEnd.json";
            break;
        case 3:
            aimJson = "./Game.json";
            break;
        case 4:
            aimJson = "./Algorithm.json";
            break;
        case 5:
            aimJson = "./Database.json";
            break;
        case 6:
            aimJson = "./Learn.json";
            break;
    }
    fetch(aimJson)
        .then(response => response.json())
        .then(data => {
            var artNum = data.articles.length;
            console.log(artNum);
            for (var i = 0; i < artNum; i++){
                CreateNewItem(i % 2, data.articles[i].title, data.articles[i].link);
            }
            setTimeout(() => {
                deltaY = 0;
                items = document.getElementsByClassName("item");
                console.log(items.length);
                scroll = document.createElement("div");
                scroll.setAttribute("class", "scroll");
                handle = document.createElement("div");
                handle.setAttribute("class", "handle");
                handle.setAttribute("id", "handle");
                scroll.appendChild(handle);
                list.appendChild(scroll);
                if (items.length <= 8) {
                    handleSize = scrollHeight;
                    itemMoveMaxY = 0;
                    scroll.style.opacity = "0";
                }
                else {
                    handleSize = 100;
                    itemMoveMaxY = 50 + (items.length - 9) * 80;
                    list.addEventListener("wheel", mouseWheel);
                    handle.addEventListener("mousedown", dragStart);
                }
                handle.style.height = handleSize.toString() + "px";    
            }, 50);
        })
        .catch(error => console.error(error));
}

RefreshItems();

//#region 滚动栏
function dragStart(event) {
    handleStartY = deltaY;
    mouseStartY = event.clientY;
    isDraging = true;
    handle.addEventListener("mousemove", drag);
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", dragEnd);
}
function drag(event) {
    if (isDraging == true) {
        deltaY = handleStartY + event.clientY - mouseStartY;
        if (deltaY >= maxScrollHeight) {
            deltaY = maxScrollHeight;
        }
        if (deltaY <= 0) {
            deltaY = 0;
        }
        for (var i = 0; i < items.length; i++){
            items[i].style.transform = "Translate(0,"+-deltaY*(itemMoveMaxY/maxScrollHeight).toString()+"px)";
        }
        handle.style.transform = "Translate(0," + deltaY.toString() + "px)";      
    }
}
function dragEnd(event) {
    isDraging = false;
    handleStartY = deltaY;
    handle.removeEventListener("mousemove", drag);
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", dragEnd);
}
function mouseWheel(event) {
    if (event.deltaY > 0) deltaY += 30;
    else if (event.deltaY < 0) deltaY -= 30;
    if (deltaY >= maxScrollHeight) {
        deltaY = maxScrollHeight;
    }
    if (deltaY <= 0) {
        deltaY = 0;
    }
    for (var i = 0; i < items.length; i++){
        items[i].style.transform = "Translate(0,"+-deltaY*(itemMoveMaxY/maxScrollHeight).toString()+"px)";
    }
    handle.style.transform = "Translate(0," + deltaY.toString() + "px)";  
}
//#endregion

var underline = document.querySelector('.underline');
var sele1 = document.getElementById('sele-1');
var sele2 = document.getElementById('sele-2');
var sele3 = document.getElementById('sele-3');
var sele4 = document.getElementById('sele-4');
var sele5 = document.getElementById('sele-5');
var sele6 = document.getElementById('sele-6');
var sele7 = document.getElementById('sele-7');
sele1.addEventListener('click', function () {
    underline.style.transform = "translate(0,0)";
    seleIndex = 0;
    RefreshItems();
})
sele2.addEventListener('click', function () {
    underline.style.transform = "translate(10vw,0)";
    seleIndex = 1;
    RefreshItems();
})
sele3.addEventListener('click', function () {
    underline.style.transform = "translate(20vw,0)";
    seleIndex = 2;
    RefreshItems();
})
sele4.addEventListener('click', function () {
    underline.style.transform = "translate(30vw,0)";
    seleIndex = 3;
    RefreshItems();
})
sele5.addEventListener('click', function () {
    underline.style.transform = "translate(40vw,0)";
    seleIndex = 4;
    RefreshItems();
})
sele6.addEventListener('click', function () {
    underline.style.transform = "translate(50vw,0)";
    seleIndex = 5;
    RefreshItems();
})
sele7.addEventListener('click', function () {
    underline.style.transform = "translate(60vw,0)";
    seleIndex = 6;
    RefreshItems();
})