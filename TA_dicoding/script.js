var DATA = {
    title: ["Perpus Kalibaru","Tanggul", "Semboro"],
    image: ["https://images.unsplash.com/photo-1590598687530-581406de2262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" , "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]}
var i = 0;

var display = document.getElementById("display");
var img = document.createElement("img");
img.setAttribute("src", DATA.image[0]);
display.appendChild(img);

var title = document.getElementsByClassName("title");
title[0].innerHTML = DATA.title[0];

var btnmore = document.getElementsByClassName("btnread-more");
var clik = 0;
btnmore[0].addEventListener("click", () => {
    if (clik == 0) {
        img.style.transform = "scale(1.1)";
        clik = 1;
    } else {
        img.style.transform = "scale(1)";
        clik = 0;
    }
});


const reset = () => {
    img.style.transform = "scale(1)";
}

const next = () => {
    i++;
    if (i >= DATA.image.length) {
        i = 0;
    }
    reset();
    title[0].innerHTML = DATA.title[i];
    img.setAttribute("src", DATA.image[i]);
    display.appendChild(img);
}

    
const prev = () => {
    i--;
    if (i < 0) {
        i = DATA.image.length - 1;
    }
    reset();
    title[0].innerHTML = DATA.title[i];
    img.setAttribute("src", DATA.image[i]);
display.appendChild(img);
}





