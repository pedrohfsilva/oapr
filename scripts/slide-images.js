const images = document.querySelectorAll(".container .slide");
const leftArrow = document.querySelector(".container .buttons .left");
const rightArrow = document.querySelector(".container .buttons .right");

let index = 0;
let imageSelected = images[index];

window.onload = setInterval(changeImageRight, 5000);

leftArrow.addEventListener("click", changeImageLeft);
rightArrow.addEventListener("click", changeImageRight);

function changeImageLeft() {
    if(index > 0) {
        index--;
    } else {
        index = 4;
    }
    imageSelected.style.opacity = "0";
    imageSelected = images[index];
    imageSelected.style.opacity = "1";
}

function changeImageRight() {
    if(index < 4) {
        index++;
    } else {
        index = 0;
    }
    imageSelected.style.opacity = "0";
    imageSelected = images[index];
    imageSelected.style.opacity = "1";
}

console.log("The most beautiful website of the world");