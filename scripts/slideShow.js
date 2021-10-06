const container = document.querySelector('.container');

const image = [  "./assets/food-images/Image01.jpeg",
                "./assets/food-images/Image03.jpeg",
                "./assets/food-images/Image02.jpeg",
                "./assets/food-images/Image04.jpeg",
                "./assets/food-images/Image05.jpeg",
                "./assets/food-images/Image06.jpeg",
                "./assets/food-images/Image07.jpeg",
                "./assets/food-images/Image08.jpeg",
                "./assets/food-images/Image09.jpeg",
                "./assets/food-images/Image10.jpeg",
                "./assets/food-images/Image11.jpeg",
                "./assets/food-images/Image12.jpeg",
                "./assets/food-images/Image13.jpeg",
                "./assets/food-images/Image14.jpeg",
                "./assets/food-images/Image15.jpeg"];

var index = 0;

function forward(){
  index++;
  if(index > image.length - 1) {
    index = 0;
  };
  container.style.backgroundImage = `url(${image[index]})`;
};

function backward(){
  index--;
  if(index < 0) {
    index = image.length - 1;
  };
  container.style.backgroundImage = `url(${image[index]})`;
};

setInterval(forward, 3000);