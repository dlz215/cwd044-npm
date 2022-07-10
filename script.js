const _ = require('lodash');

let arr1 = [1,2,3,4,5,6,7,8];
let answer = _.without(arr1, 3);
console.log(answer);

let styleOutput = document.querySelector("h3");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let body = document.getElementById("gradient")
let randomButton = document.getElementById("random")
let randomColor1 = '#';
let randomColor2 = '#';

let initialColor1 = "#00ff00";
let initialColor2 = "#ff0000";
color1.value = initialColor1;
color2.value = initialColor2;

function setBackground() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    /* Node: abstract base class | node.textContent - returns/sets textual content of element */
    styleOutput.textContent = body.style.background + ";";
};

setBackground();

/* input event: any time input value is changed */
/* no parenthesis in callback function 'setBackground' - this would actually call the function */
color1.addEventListener("input", setBackground)

color2.addEventListener("input", setBackground)

const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function getRandomBackground() {

    randomColor1 = '#';
    randomColor2 = '#';

    for(let i = 0; i < 6; i++){
        const index1 = Math.floor(Math.random() * hexValues.length);
        const index2 = Math.floor(Math.random() * hexValues.length);
        randomColor1 += hexValues[index1];
        randomColor2 += hexValues[index2];
    }

    color1.value = randomColor1;
    color2.value = randomColor2;
    setBackground();
};

randomButton.addEventListener("click", getRandomBackground);

