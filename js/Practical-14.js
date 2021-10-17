var displayNum = document.getElementById("displaynumber");
var btnIncrement = document.getElementById("counter-btn-inr");
var btnDecrement = document.getElementById("counter-btn-dcr");
var number = 0;
btnDecrement.disabled = true;
function checknegative() {
    if (number > 0) {
        btnDecrement.disabled = false;
    }
    if (number <= 0) {
        btnDecrement.disabled = true;
    }
}
function inr() {
    number++;
    displayNum.innerHTML = number;
    checknegative();
}
function dcr() {
    number--;
    displayNum.innerHTML = number;
    checknegative();
}