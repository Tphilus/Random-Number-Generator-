// const rand = Math.floor(Math.random() * 10);
// console.log(rand);

const  number = document.querySelector(".number");
const  btn = document.querySelector(".generate");

const generateNumber = () => {
    // Generaate number btween 1 and 100
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener("click", generateNumber);
generateNumber();