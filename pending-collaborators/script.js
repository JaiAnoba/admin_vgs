//VIEW FOLDER IMGS
document.addEventListener("DOMContentLoaded", function () {
    const clbrCards = document.querySelectorAll(".clbr-exhibit-section");
    const modal = document.getElementById("clbr-image-modal");
    const modalImage = modal.querySelector(".clbr-modal-image");
    const replaceContainer = modal.querySelector(".clbr-replace-container");
    const leftBtn = modal.querySelector(".clbr-left-btn");
    const rightBtn = modal.querySelector(".clbr-right-btn");
    const replaceInput = document.getElementById("clbr-replace-input");

    let currentImages = []; 
    let currentIndex = 0;   

    function openModal(images) {
        modal.style.display = "flex"; 
        currentImages = images; 
        currentIndex = 0; 
        updateModalContent(); 
    }

    function updateModalContent() {
        modalImage.src = currentImages[currentIndex].src; 

        const replaceText = replaceContainer.querySelector(".clbr-replace-text");
        replaceText.onclick = function () {
            replaceInput.click(); 
        };
    }

    replaceInput.addEventListener("change", function () {
        if (replaceInput.files && replaceInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const newSrc = e.target.result;
                currentImages[currentIndex].src = newSrc; 
                modalImage.src = newSrc; 
            };

            reader.readAsDataURL(replaceInput.files[0]); 
        }
    });

    for (let i = 0; i < clbrCards.length; i++) {
        clbrCards[i].addEventListener("click", function () {
            const images = clbrCards[i].querySelectorAll("img"); 
            if (images.length > 0) {
                openModal(images); 
            }
        });
    }

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; 
        }
    });

    leftBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--; 
        } else {
            currentIndex = currentImages.length - 1; 
        }
        updateModalContent(); 
    });

    rightBtn.addEventListener("click", function () {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateModalContent(); 
    });
});


//POPUP MSG
const popupOverlay = document.getElementById("clbr-popup-overlay");
const confirmBtn = document.querySelector(".clbr-con");
const cancelBtn = document.querySelector(".clbr-can");

const cancelRequests = document.querySelectorAll(".clbr-cancel-request");

for (let i = 0; i < cancelRequests.length; i++) {
    cancelRequests[i].addEventListener("click", function () {
        popupOverlay.style.display = "flex";
    });
}

confirmBtn.addEventListener("click", function () {
    alert("User confirmed cancellation.");
    popupOverlay.style.display = "none";
});

cancelBtn.addEventListener("click", function () {
    alert("User canceled the popup.");
    popupOverlay.style.display = "none";
});
