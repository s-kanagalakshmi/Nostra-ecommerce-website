let leftSlide = document.getElementById("leftScroll");
let rightSlide = document.getElementById("rightScroll");
let getOffer = document.getElementById("offerId")
let closeBtn=document.getElementById("closeId")
getOffer.style.display="flex"

//Main function
closeBtn.addEventListener("click",function(){
    getOffer.style.display="none"
})
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

