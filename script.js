let headers = document.querySelector(".headers");
let photosNameTitle = document.querySelector(".photos__name-title");
photosNameTitle.addEventListener("click",()=>{
  photosNameTitle.classList.toggle("phota__name-title")
})
headers.addEventListener("click",()=>{
  headers.classList.toggle("red")
})