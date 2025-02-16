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
let menuIcon=document.getElementById("menu")
let list=document.getElementById("list")
menuIcon.addEventListener("click", function () {
    list.style.display = "flex";
    list.style.position = "absolute";
    list.style.top = "0"; // Align to the top
    list.style.left = "0";
    list.style.width = "50%"; // Cover half screen width
    list.style.height = "100vh"; // Full height
    list.style.backgroundColor = "black";
    list.style.color = "white";
    list.style.flexDirection = "column";
    list.style.alignItems = "center";
    list.style.justifyContent = "start" 
    list.style.padding = "0"; 
    list.style.gap = "20px"; 
    list.style.zIndex="200"
});


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
