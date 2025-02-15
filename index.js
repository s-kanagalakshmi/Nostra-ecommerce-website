let leftSlide = document.getElementById("leftScroll");
let rightSlide = document.getElementById("rightScroll");
let bannerImg = document.getElementById("banner-img");
let getOffer = document.getElementById("offerId")
let closeBtn=document.getElementById("closeId")
// Get all images inside the banner
let images = bannerImg.getElementsByTagName("img");
let totalImages = images.length;
let index = 0; // Current image index
let visibleImages = 2; // Number of images visible at once
let imgWidth = images[0].clientWidth + 10; // Image width including margin
getOffer.style.display="flex"

//Main function
closeBtn.addEventListener("click",function(){
    getOffer.style.display="none"
})
function updateSlider() {
    let offset = -index * imgWidth; // Move by image width
    bannerImg.style.transform = `translateX(${offset}px)`;
}

// Move to the previous image
leftSlide.addEventListener("click", function () {
    if (index > 0) {
        index--; // Move left only if not at the beginning
    } else {
        index = totalImages - visibleImages; // Jump to end if at start
    }
    updateSlider();
});

// Move to the next image
rightSlide.addEventListener("click", function () {
    if (index < totalImages - visibleImages) {
        index++; // Move right only if not at the end
    } else {
        index = 0; // Jump to start if at end
    }
    updateSlider();
});

// Initial display setup
updateSlider();
