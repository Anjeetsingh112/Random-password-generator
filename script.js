const passwordBox = document.getElementById("password");
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
const lowerCase1 = document.getElementById("lowercase");
const upperCase1 = document.getElementById("uppercase");
const number1 = document.getElementById("number");
const symbol1 = document.getElementById("symbols");
const copyIcon = document.querySelector(".copyIcon");
const btn = document.querySelector("button");

//showing input slider value
const func = (sliderValue.textContent = inputSlider.value);
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
btn.addEventListener("click", () => {
  passwordBox.value = createpassword();
});

const upperCase2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase2 = "abcdefghijklmnopqrstuvwxyz";
const number2 = "1234567890";
const symbol2 = "!@#$%^&*";
// function to generate password
function createpassword() {
  let password = "";
  let allCars = "";
  allCars += lowerCase1.checked ? lowerCase2 : "";
  allCars += upperCase1.checked ? upperCase2 : "";
  allCars += number1.checked ? number2 : "";
  allCars += symbol1.checked ? symbol2 : "";
  if (allCars == "" || allCars.length == 0) {
    return password;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    password += allCars.charAt(Math.floor(Math.random() * allCars.length));
    i++;
  }
  return password;
}
//two way to copy password
// copyIcon.addEventListener("click",()=>{
//   passwordBox.select();
//    navigator.clipboard.writeText(passwordBox.value);
// });

copyIcon.addEventListener("click", () => {
  if (passwordBox.value != "" || passwordBox.value >= 1) {
    navigator.clipboard.writeText(passwordBox.value);
    alert("copied");
  }
});
