function CopyToCopyboard(content) {
    const tempElement = document.createElement('textarea');
    tempElement.value = content;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    var message = document.createElement("div");
    message.style.width = "230px";
    message.style.height = "75px";
    message.style.borderRadius = "10px";
    message.style.backgroundColor = "rgba(0, 119, 255,1)";
    message.style.zIndex = "10";
    message.style.position = "fixed";
    message.style.top = "400px";
    message.innerHTML = "复制成功！"
    message.style.fontSize = "25px";
    message.style.fontWeight = "600";
    message.style.lineHeight = "75px";
    message.style.textAlign = "center";
    message.style.color = "white";
    message.style.userSelect = "none";
    var y = 200;
    var alpha = 1;
    var up = false;
    body.appendChild(message);
    setTimeout(() => {
        body.removeChild(message);
    }, 5000);
    setInterval(() => {
        y -= 0.7;
        if (y < 0) {
            if (y < 100) {
                alpha -= 0.002;
                message.style.opacity = alpha.toString();
            } 
            message.style.transform = "translate(0," + y.toString() + "px)";   
        }
    }, 1);   
    return 0;
}

function CreateNewItem(color,title,link) {
    var newItem = document.createElement("li");
    newItem.setAttribute("class", "item");
    var p = document.createElement("p");
    p.setAttribute("class", "title");
    if (color == 0) {
        p.style.setProperty("--bgOn", "rgba(150, 150, 150,1)");
        p.style.setProperty("--bgOff","rgba(150, 150, 150,0.5)");
    }
    else if (color == 1) {
        p.style.setProperty("--bgOn", "rgba(0, 119, 255,1)");
        p.style.setProperty("--bgOff","rgba(0, 119, 255,0.5)");
    }
    p.innerHTML = title;
    newItem.appendChild(p);
    document.querySelector(".list").appendChild(newItem);
    newItem.addEventListener("click", function () {
        window.open(link);
    })
    return 0;
}

export { CopyToCopyboard,CreateNewItem };