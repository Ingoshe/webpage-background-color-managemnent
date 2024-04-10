const pageBody = document.querySelector(".body");
const blueButton = document.querySelector(".blue");
const aquaButton = document.querySelector(".aqua");


blueButton.addEventListener("click", function (e) {
  pageBody.style.backgroundColor = "blue";
  e.stopPropagation();
});

aquaButton.addEventListener("click", function () {
  pageBody.style.backgroundColor = "aqua";
  e.stopPropagation();
});

pageBody.addEventListener('click',() =>{
  pageBody.style.backgroundColor = "white";
},true)




