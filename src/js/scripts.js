const imgFolderName = "./../assets/img/";
const thumbsFolderName = "./../assets/img/thumbnails/";
const fileExtension = ".jpg";

const gallery = document.querySelectorAll('.gallery');
const maxElementsToLoad = 9; // dynamic value after 


function setCurrentImage(galleryNr, val) {
    const imageBig = galleryNr.querySelector('.image-big');
    imageBig.src = imgFolderName + val + fileExtension;
}

function toggleActive(galleryNr, container, val) {
    let activeMinis = galleryNr.getElementsByClassName('current');
    if(activeMinis.length > 0) {
        activeMinis[0].classList.remove('current');
    }
    container[val].classList.add('current');
}

function handleView(galleryNr) {
    const thumbnails = galleryNr.querySelector('.thumbnails');
    const prevBtn = galleryNr.querySelector('.js--btn-prev');
    const nextBtn = galleryNr.querySelector('.js--btn-next');
    let currentImageNr = 1;
        
    // load all files from img folder
    for(let i = 0; i < maxElementsToLoad; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = thumbsFolderName + parseInt(i + 1) + fileExtension;
        thumbnails.appendChild(imageElement).className = 'thumbnails--item';
    }

    // set active class
    thumbnails.firstElementChild.classList.add('current');
    let minis = galleryNr.getElementsByClassName('thumbnails--item');
    let activeThumbnails = document.getElementsByClassName('current');

    // load big view from thumbnails
    for(let i = 0; i < minis.length; i++) {
        minis[i].addEventListener("click", () => {
            toggleActive(galleryNr, minis, i);
            currentImageNr = i + 1;
            setCurrentImage(galleryNr, currentImageNr);
        })
    }

    // arrow buttons handling
    nextBtn.addEventListener("click", () => {
        if(currentImageNr < minis.length) {
            currentImageNr++;
            setCurrentImage(galleryNr, currentImageNr);
            toggleActive(galleryNr, minis, currentImageNr - 1);
        } else {
            nextBtn.classList.tog   
        }
        if(currentImageNr > 4) {
            thumbnails.scrollLeft += 200;
        }
    })

    prevBtn.addEventListener("click", () => {
        if(currentImageNr > 1) {
            currentImageNr--;
            setCurrentImage(galleryNr, currentImageNr);
            toggleActive(galleryNr, minis, currentImageNr - 1);
        } 
        if(currentImageNr < 4) {
            thumbnails.scrollLeft -= 200;
        }
    })
}

for(let i = 0; i < gallery.length; i++) {
    handleView(gallery[i]);
    setCurrentImage(gallery[i], 1);
}