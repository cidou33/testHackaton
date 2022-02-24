// We first grab our scroll area and carousel buttons
const carouselScrollArea = document.querySelector(".CDcarousel__scroll-area");

const leftCarouselButton = document.querySelector(".CDcarousel__button--left");

const rightCarouselButton = document.querySelector(".CDcarousel__button--right");

// We then listen in for clicks and scroll the carousel accordingly
leftCarouselButton.addEventListener("click", () => scrollCarousel("left"));

rightCarouselButton.addEventListener("click", () => scrollCarousel("right"));

function scrollCarousel(direction) {
  if (direction === "left") {
    carouselScrollArea.scrollLeft -= carouselScrollArea.clientWidth;
  } else if (direction === "right") {
    carouselScrollArea.scrollLeft += carouselScrollArea.clientWidth;
  } else {
    console.error("Invalid direction");
  }
}

// We grab the whole carousel wrapper
const carouselWrapper = document.querySelector(".CDcarousel__wrapper");

// We listen for keypresses and react based on which key was pressed
carouselWrapper.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (event.key === "ArrowLeft") {
    scrollCarousel("left");
  } else if (event.key === "ArrowRight") {
    scrollCarousel("right");
  }
}