/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator() {
    const carousel = document.createElement("div");
    leftButton = document.createElement("div");
    img1 = document.createElement("img");
    img2 = document.createElement("img");
    img3 = document.createElement("img");
    img4 = document.createElement("img");
    rightButton = document.createElement("div");

    carousel.classList.add('carousel');
    leftButton.classList.add("left-button");
    rightButton.classList.add("right-button");
    leftButton.textContent = ' < ';
    rightButton.textContent = ' > ';

    img1.src = "./assets/carousel/mountains.jpeg";
    img1.alt = "mountains";
    img1.style.display = "block";

    img2.src = "./assets/carousel/computer.jpeg";
    img2.alt = "computer";


    img3.src = "./assets/carousel/trees.jpeg";
    img3.alt = "trees";


    img4.src = "./assets/carousel/turntable.jpeg";
    img4.alt = "turntable";

    carousel.appendChild(leftButton);
    carousel.appendChild(img1);
    carousel.appendChild(img2);
    carousel.appendChild(img3);
    carousel.appendChild(img4);
    carousel.appendChild(rightButton);

    return carousel;
}
const carouselContainer = document.querySelector(".carousel-container");
console.log(carouselContainer);
carouselContainer.append(carouselCreator());
const imgArray = document.querySelectorAll(".carousel-container .carousel img");


let index = 1; // index of the next image
let flag = true; //true when the right button is triggered, false- when the left button is triggered

//flag function for left button
function flagTrue(flag) {
    if (flag) {

        if (index > 0) {
            index--;

        } else {
            index = imgArray.length - 1;

        }

    }
    //-------------------------------

}
//flag function for right button
function flagFalse(flag) {
    if (!flag) {
        if (index < imgArray.length - 1) {
            index++;
        } else {
            index = 0;
        }

    }

}



const rButton = document.querySelector(".right-button");
//-----------------------------
rButton.addEventListener("click", (e) => {
        flagFalse(flag);
        flagFalse(flag);


        console.log('r index ', index);
        if (index - 1 < 0) {
            imgArray[imgArray.length - 1].style.display = "none";
        } else {
            imgArray[index - 1].style.display = "none";
        }
        imgArray[index].style.display = "block";


        if (index < imgArray.length - 1) {
            index++;
        } else {
            index = 0;
        }

        flag = true;
    })
    //-----------------------

const lButton = document.querySelector(".left-button");
lButton.addEventListener("click", (e) => {
    flagTrue(flag);
    flagTrue(flag);

    console.log('l index ', index);
    if (index + 1 > imgArray.length - 1) {
        imgArray[0].style.display = "none";
        //console.log("l previous img  imgArray[0]", imgArray[0]);
    } else {
        imgArray[index + 1].style.display = "none";
        //console.log("l current img  imgArray[index + 1]", imgArray[index + 1]);
    }

    imgArray[index].style.display = "block";
    console.log("l block img  imgArray[index + 1]", imgArray[imgArray.length - index]);

    if (index > 0) {
        index--;

    } else {
        index = imgArray.length - 1;

    }

    flag = false;
})