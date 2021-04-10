const prevBtn = document.querySelector('.js--btn-prev');
const nextBtn = document.querySelector('.js--btn-next');
const bigPicture = document.querySelector('.image-viewer__picture');
const thumbnailsContainer = document.querySelector('.image-viewer__thumbnails');
let activeThumbnails = document.getElementsByClassName('active');

const folderName = "./../assets/img/";
const fileExtension = ".jpg";
const maxThumbnailsToView = 10; // powinno byc dynamiczne po przeskanowaniu folderu

function loadThumbnails(fileName) {
    const imgSelector = document.createElement('img');
    imgSelector.src = folderName + fileName + fileExtension;
    thumbnailsContainer.appendChild(imgSelector).className = "image-viewer__thumbnails--item";
}

for(let i = 1; i < maxThumbnailsToView; i++) {
    loadThumbnails(i);
}

let thumbnails = document.getElementsByClassName('image-viewer__thumbnails--item');
bigPicture.src = thumbnails[0].src;
thumbnailsContainer.firstElementChild.classList.add('active');

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
        if(activeThumbnails.length > 0) {
            activeThumbnails[0].classList.remove('active');
        }
        thumbnails[i].classList.add('active');
        bigPicture.src = thumbnails[i].src;
    })
}

nextBtn.addEventListener("click", () => {
    thumbnailsContainer.scrollLeft += 200;
})

prevBtn.addEventListener("click", () => {
    thumbnailsContainer.scrollLeft -= 200;
})