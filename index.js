"use strict";
let mainContainer = document.getElementById("main-container");

let childContainer = document.createElement("div");
childContainer.classList.add("childContainer");
mainContainer.appendChild(childContainer);

let showMoreBtn = document.createElement("button");
showMoreBtn.textContent = "SHow More";
showMoreBtn.classList.add("show-more-btn");
mainContainer.appendChild(showMoreBtn);

let cardContainer = document.createElement("div");
mainContainer.appendChild(cardContainer);
cardContainer.classList.add("cardContainer");

let img = document.createElement("img");
img.src = "./5.png.jpg";
img.classList.add("img");
cardContainer.appendChild(img);

let descriptionContainer = document.createElement("div");
cardContainer.appendChild(descriptionContainer);
descriptionContainer.classList.add("descriptionContainer");

let btn1 = document.createElement("button");
btn1.textContent = "Veg";
btn1.classList.add("btn1");
descriptionContainer.appendChild(btn1);

let btn2 = document.createElement("button");
btn2.textContent = "Biryani";
btn2.classList.add("btn1");
descriptionContainer.appendChild(btn2);

let headingOne = document.createElement("h1");
headingOne.textContent = "Chicken Biryani";
headingOne.id = "headingOne";
descriptionContainer.appendChild(headingOne);

let p1 = document.createElement("p");
p1.textContent = "Avacados";
p1.classList.add("Avacados");
descriptionContainer.appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = "Vegeterian";
p2.classList.add("Avacados");
descriptionContainer.appendChild(p2);

let anotherCard = document.createElement("div");
mainContainer.append(anotherCard);
anotherCard.classList.add("childContainer");

let img2 = document.createElement("img");
img2.src = "./1.png.jpg";
img2.classList.add("img");
anotherCard.appendChild(img2);
img2.id = "img";

let btn3 = document.createElement("button");
btn3.textContent = "Veg";
btn3.classList.add("btn1");
anotherCard.appendChild(btn3);

let btn4 = document.createElement("button");
btn4.textContent = "Biryani";
btn4.classList.add("btn1");
anotherCard.appendChild(btn4);

let HeadingTwo = document.createElement("h1");
HeadingTwo.textContent = "Chicken Mandi";
HeadingTwo.id = "headingOne";
anotherCard.appendChild(HeadingTwo);

let p4 = document.createElement("p");
p4.textContent = "Pulihora";
p4.classList.add("Avacados");
anotherCard.appendChild(p4);

let p3 = document.createElement("p");
p3.textContent = "Veg";
p3.classList.add("Avacados");
anotherCard.appendChild(p3);

showMoreBtn.addEventListener("click", () => {
  if (anotherCard.style.display === "block") {
    anotherCard.style.display = "none";
  } else {
    anotherCard.style.display = "block";
  }
});
