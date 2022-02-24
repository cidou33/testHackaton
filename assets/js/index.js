const carouselScrollArea = document.querySelector(".CDcarousel__scroll-area");
const leftCarouselButton = document.querySelector(".CDcarousel__button--left");
const rightCarouselButton = document.querySelector(".CDcarousel__button--right");
const carouselWrapper = document.querySelector(".CDcarousel__wrapper");

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

function handleKeyDown(e) {
  if (event.key === "ArrowLeft") {
    scrollCarousel("left");
  } else if (event.key === "ArrowRight") {
    scrollCarousel("right");
  }
}

carouselWrapper.addEventListener("keydown", handleKeyDown);

