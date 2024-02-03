import { lists } from'./texInner/textinner.js'
//переменные
let list = document.querySelector(".headers__logo");
let headers = document.querySelector(".headers");
let photosNameTitle = document.querySelector(".photos__name-title");
let stay = document.querySelector(".stay");
const staysTitle = document.querySelector(".stays__title");

//общий функционал

const setColorHeader = () => {
    headers.classList.toggle("red")
}
const photos =()=>{
  photosNameTitle.classList.toggle("phota__name-title")
}
const photaName = (stay)=>{
  stay.classList.toggle("phota__name-title")
}
const staysTitler=()=>{
  stay.classList.toggle("red")
}
//обработчики событий
headers.addEventListener("click", setColorHeader);
photosNameTitle.addEventListener("click",photos);
stay.addEventListener("click",photaName);
staysTitle.addEventListener("click",staysTitler);
//результат



lists(list);
