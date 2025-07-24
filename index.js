import './style.scss';

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randomIndex = null;
let randomPassword1 = [];
let randomPassword2 = [];
let output1 = document.querySelector("#output-el1");
let output2 = document.querySelector("#output-el2");
let copiedItem = document.querySelectorAll(".copied");
let isButtonClicked = false;

[output1, output2].forEach((element) => {
  element.addEventListener('click', () =>{
    if (!isButtonClicked) return;
    const text = element.textContent;
    navigator.clipboard.writeText(text);
    [output1, output2].forEach((element) => element.classList.remove('border'));
    element.classList.add('border');
    const targetId = element.dataset.target;
    copiedItem.forEach(copy =>{
      if(copy.id === targetId){
        copy.classList.remove('hidden');
      } else {
        copy.classList.add('hidden');
      }
    })
  })
})

function generatePassword(){
  randomPassword1 = [];
  randomPassword2 = [];
  let userPasswordLength = parseInt(document.querySelector("#userPasswordLength").value);
 
  for (let i = 0; i < userPasswordLength; i++){
    randomIndex = Math.floor(Math.random() * characters.length)
    randomPassword1.push(characters[randomIndex])

    randomIndex = Math.floor(Math.random() * characters.length)
    randomPassword2.push(characters[randomIndex])
  }
  output1.textContent = randomPassword1.join("");
  output2.textContent = randomPassword2.join("");
  isButtonClicked = true;
}

window.generatePassword = generatePassword;



