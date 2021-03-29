const prevBtn = document.querySelector('.prev');
const nxtBtn = document.querySelector('.next');
const galleryImg = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    console.log("I can click the prev button");

    galleryImg[currentlySelected].classList.remove("active");
    currentlySelected--;

    galleryImg[currentlySelected].classList.add("active");
    nxtBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
})

nxtBtn.addEventListener('click', function() {
    console.log("I can click the next button");

    galleryImg[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImg[currentlySelected].classList.add("active");

    prevBtn.disabled = false;

    if (galleryImg.length === currentlySelected + 1) {
        nxtBtn.disabled = true;
    }
})

