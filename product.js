let leftSlide = document.getElementById("leftScroll");
let rightSlide = document.getElementById("rightScroll");
let getOffer = document.getElementById("offerId")
let closeBtn=document.getElementById("closeId")
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
let searchInput = document.querySelector("#search input");
let checkboxes = document.querySelectorAll("#option-div input[type='checkbox']");
let items = document.querySelectorAll("#dress-section div");

function filterItems() {
    let searchText = searchInput.value.toLowerCase();
    let selectedFilters = [];

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedFilters.push(checkbox.value.toLowerCase());
        }
    }

    for (let item of items) {
        let dressName = item.querySelector("p").innerText.toLowerCase();
        let matchesText = searchText === "" || dressName.includes(searchText);
        let matchesFilter = selectedFilters.length === 0;

        for (let filter of selectedFilters) {
            if (dressName.includes(filter)) {
                matchesFilter = true;
                break;
            }
        }

        item.style.display = matchesText && matchesFilter ? "block" : "none";
    }
}

searchInput.addEventListener("keyup", filterItems);

for (let checkbox of checkboxes) {
    checkbox.addEventListener("click", filterItems);
}

