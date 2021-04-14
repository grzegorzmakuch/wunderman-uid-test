const prevBtn = document.querySelector('.js--btn-prev');
const nextBtn = document.querySelector('.js--btn-next');
const bigPicture = document.querySelector('.image-viewer__picture');
const thumbnailsContainer = document.querySelector('.image-viewer__thumbnails');
const thumbnailsContainer2 = document.querySelector('.image-viewer__thumbnails2');
let activeThumbnails = document.getElementsByClassName('active');
let imagesArray = [];
let activeImg = 1;

const imgFolderName = "./../assets/img/";
const thumbsFolderName = "./../assets/img/thumbnails/";
const fileExtension = ".jpg";
const maxThumbnailsToView = 10; // powinno byc dynamiczne po przeskanowaniu folderu

function loadThumbnails(galleryNr, fileName) {
    const imgSelector = document.createElement('img');
    imgSelector.src = thumbsFolderName + fileName + fileExtension;
    galleryNr.appendChild(imgSelector).className = galleryNr.className + "--item";
    imagesArray[fileName] = imgFolderName + fileName + fileExtension;
}

for(let i = 1; i < maxThumbnailsToView; i++) {
    loadThumbnails(thumbnailsContainer, i);
    loadThumbnails(thumbnailsContainer2, i);
}

let thumbnails = document.getElementsByClassName('image-viewer__thumbnails--item');
thumbnailsContainer.firstElementChild.classList.add('active');
bigPicture.src = imagesArray[activeImg];

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
        toggleActive(i);
        bigPicture.src = imagesArray[i + 1];
        activeImg = i + 1;
    })
}

function toggleActive(val) {
    if(activeThumbnails.length > 0) {
        activeThumbnails[0].classList.remove('active');
    }
    thumbnails[val].classList.add('active');
}

nextBtn.addEventListener("click", () => {
    if(activeImg < imagesArray.length - 1) {
        activeImg++;
        bigPicture.src = imagesArray[activeImg];
        toggleActive(activeImg - 1);
    } else {
        nextBtn.removeAttribute("href");
    }
    if(activeImg > 4) {
        thumbnailsContainer.scrollLeft += 200;
    }
})

prevBtn.addEventListener("click", () => {
    if(activeImg > 1) {
        activeImg--;
        bigPicture.src = imagesArray[activeImg];
        toggleActive(activeImg - 1);
    } else {
        nextBtn.removeAttribute("href");
    }
    if(activeImg < 4) {
        thumbnailsContainer.scrollLeft -= 200;
    }
})