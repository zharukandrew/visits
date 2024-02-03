import { lists } from'./texInner/textinner.js'
//переменные
let list = document.querySelector(".headers__logo");
let headers = document.querySelector(".headers");
let photosNameTitle = document.querySelector(".photos__name-title");
let stay = document.querySelector(".stay");
const staysTitle = document.querySelector(".stays__title");

//обработчики событий

const setColorHeader = () => {
    headers.classList.toggle("red")
}

headers.addEventListener("click", setColorHeader)
//образец сделать 


function photos(photosNameTitle){
  photosNameTitle.addEventListener("click",()=>{
      photosNameTitle.classList.toggle("phota__name-title")
    })
}
function photaName(stay){
  stay.addEventListener("click",()=>{
  stay.classList.toggle("phota__name-title")
})
}
function staysTitler(staysTitle){
  staysTitle.addEventListener("click",()=>{
  stay.classList.toggle("red")
})
}




//результат
staysTitler(staysTitle)
photos(photosNameTitle);
photaName(stay);
lists(list);