var percentElement1 = document.getElementById("percent1");
var percentElement2 = document.getElementById("percent2");
const toggleBtn1 = document.getElementById("toggleBtn1");
const button1 = document.getElementById("decrease1");
const button2 = document.getElementById("increase1");
const toggleBtn2 = document.getElementById("toggleBtn2");
const button3 = document.getElementById("decrease2");
const button4 = document.getElementById("increase2");
var percentValue1 = 30;
var percentValue2 = 30;

// Function to increase LED1 brightness
function increase1() {
    if(percentValue1 < 100 & percentValue1 >= 0) {
        percentValue1 += 10;
        percentElement1.innerHTML = percentValue1 + "%";
    }
}

// Function to decrease LED1 brightness
function decrease1() {
    if(percentValue1 <= 100 & percentValue1 > 0) {
        percentValue1 -= 10;
        percentElement1.innerHTML = percentValue1 + "%";
    }
}

// Function to toggle LED1
toggleBtn1.addEventListener("click", function() {
    if(button1.disabled) {
        percentValue1 = 30;
        percentElement1.innerHTML = percentValue1 + "%";
        button1.disabled = false;
        button2.disabled = false;
    }
    else {
        percentValue1 = 0;
        percentElement1.innerHTML = 0 + "%";
        button1.disabled = true;
        button2.disabled = true;
    }
});

// Function to increase LED2 brightness
function increase2() {
    if(percentValue2 < 100 & percentValue2 >= 0) {
        percentValue2 += 10;
        percentElement2.innerHTML = percentValue2 + "%";
    }
}

// Function to decrease LED2 brightness
function decrease2() {
    if(percentValue2 <= 100 & percentValue2 > 0) {
        percentValue2 -= 10;
        percentElement2.innerHTML = percentValue2 + "%";
    }
}

// Function to toggle LED2
toggleBtn2.addEventListener("click", function() {
    if(button3.disabled) {
        percentValue2 = 30;
        percentElement2.innerHTML = percentValue2 + "%";
        button3.disabled = false;
        button4.disabled = false;
    }
    else {
        percentValue2 = 0;
        percentElement2.innerHTML = 0 + "%";
        button3.disabled = true;
        button4.disabled = true;
    }
});

// Function to reset interface
function RST() {
    percentValue1 = 0;
    percentElement1.innerHTML = 0 + "%";
    percentValue2 = 0;
    percentElement2.innerHTML = 0 + "%";
    toggleBtn1.checked = false;
    toggleBtn2.checked = false;
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}