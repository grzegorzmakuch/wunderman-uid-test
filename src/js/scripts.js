const prevBtn = document.querySelector('.js--btn-prev');
const nextBtn = document.querySelector('.js--btn-next');
const bigPicture = document.querySelector('.image-viewer__picture');
const thumbnailsContainer = document.querySelector('.image-viewer__thumbnails');
let activeThumbnails = document.getElementsByClassName('active');
let imagesArray = [];
let activeImg = 0;

const imgFolderName = "./../assets/img/";
const thumbsFolderName = "./../assets/img/thumbnails/";
const fileExtension = ".jpg";
const maxThumbnailsToView = 10; // powinno byc dynamiczne po przeskanowaniu folderu
 
function loadThumbnails(fileName) {
    const imgSelector = document.createElement('img');
    imgSelector.src = thumbsFolderName + fileName + fileExtension;
    thumbnailsContainer.appendChild(imgSelector).className = "image-viewer__thumbnails--item";
    imagesArray[fileName] = imgFolderName + fileName + fileExtension;
}

for(let i = 1; i < maxThumbnailsToView; i++) {
    loadThumbnails(i);
}

let thumbnails = document.getElementsByClassName('image-viewer__thumbnails--item');
thumbnailsContainer.firstElementChild.classList.add('active');
bigPicture.src = imagesArray[1];

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
        if(activeThumbnails.length > 0) {
            activeThumbnails[0].classList.remove('active');
        }
        thumbnails[i].classList.add('active');
        bigPicture.src = imagesArray[i + 1];
    })
}

function checkActive() {
    for(let i = 0; i < thumbnails.length; i++) {
        if(thumbnails[i].classList.contains('active')) {
            return i;
        }
    }
}

nextBtn.addEventListener("click", () => {
    active = checkActive();
    bigPicture.src = imagesArray[active + 2];
    // active++;
    // thumbnailsContainer.scrollLeft += 200;
})

prevBtn.addEventListener("click", () => {
    thumbnailsContainer.scrollLeft -= 200;
})