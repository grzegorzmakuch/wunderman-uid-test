const prevBtn = document.querySelector('.image-viewer__buttons--prev');
const nextBtn = document.querySelector('.image-viewer__buttons--next');
const bigView = document.querySelector('.image-viewer__picture');
const unorderedList = document.querySelector('.image-viewer__thumbnails');
const folderName = "./../assets/img/";
const fileExtension = ".jpg";
let activeThumb = 1;
let activeThumbValue = 1;

const itemsAmount = 5;

function addListItem(val) {
    const img = document.createElement('img');
    img.src = folderName + val + fileExtension;
    const newLi = document.createElement("li");
    newLi.appendChild(img);
    unorderedList.appendChild(newLi).className = "image-viewer__thumbnails--item";
}

for(let i = 1; i < itemsAmount; i++) {
    addListItem(i);
}

const thumbs = document.querySelectorAll('.thumbnails--item');
bigView.textContent = activeThumb;

for(let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", function() {
        activeThumbValue = new Number(thumbs[i].textContent);
    })
}

nextBtn.addEventListener("click", () => {
    if(activeThumbValue < itemsAmount) {
        activeThumbValue++;
        bigView.textContent = activeThumbValue;
    } else {
        nextBtn.removeAttribute("a");
    }
    
})

prevBtn.addEventListener("click", () => {
    if(activeThumbValue > 1) {
        activeThumbValue--;
        bigView.textContent = activeThumbValue;
    } else {
        prevBtn.removeAttribute("a");
    }  
})