let headers = document.querySelector(".headers");
let photosNameTitle = document.querySelector(".photos__name-title");
let stay = document.querySelector(".stay");
let staysTitle = document.querySelector(".stays__title");
let footer = document.querySelector(".footer");
photosNameTitle.addEventListener("click",()=>{
  photosNameTitle.classList.toggle("phota__name-title")
})
headers.addEventListener("click",()=>{
  headers.classList.toggle("red")
})
stay.addEventListener("click",()=>{
  stay.classList.toggle("phota__name-title")
})
staysTitle.addEventListener("click",()=>{
  stay.classList.toggle("red")
})
