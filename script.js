// SETUP 1
const myNumber = Math.random() * 10 + 1
console.log(Math.floor(myNumber));
// SETUP 2
const inputs = document.querySelector(".inputs");
inputs.addEventListener("input", () => console.log(inputs.value));
//SETUP 3
const myText = document.querySelector(".subtitle");
const btn = document.querySelector(".btn");
btn.addEventListener("click", myBtn);
let counter = 1;
btn.addEventListener("click", () => {
    counter++;
});
//SETUP 4
function myBtn() {
    if (inputs.value == (Math.floor(myNumber))) {
        myText.textContent = "Siz " + counter + "-imkoniyatda yutingiz tabriklaymiz!";
    } else if (inputs.value == 0) {
        myText.textContent = "Siz son kritmadingiz!";
    } else if (inputs.value < 0) {
        myText.textContent = "Faqat 1-dan 10 gacha son kriting";
    } else if (inputs.value > 10) {
        myText.textContent = "Faqat 1-dan 10 gacha son kriting";
    } else if (inputs.value < myNumber) {
        myText.textContent = "Kattaroq son o'ylang";
    } else if (inputs.value > myNumber) {
        myText.textContent = "Kichikroq son o'ylang";
    } else {
        myText.textContent = "Siz son kritmadingiz!";
    };
    if (inputs.value == (Math.floor(myNumber))) {
        btn.classList.remove("btn");
        btn.classList.add("btns");
        btn.textContent = "Reset";
        btn.addEventListener("click", () => {
            document.location.reload()
        });
    };
};