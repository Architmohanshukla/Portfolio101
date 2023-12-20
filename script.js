document.querySelectorAll(".photo").forEach((photo) => {
    photo.addEventListener("click", () => {
        // Handle the click event as per your requirements
        // You can add custom behavior here
        console.log("Photo clicked!");
    });
});
// JavaScript for modal functionality
       function openLightbox(imageSrc, caption) {
           const modal = document.querySelector(".modal");
           const modalImage = document.getElementById("modalImage");
           const modalCaption = document.getElementById("modalCaption");

           modalImage.src = imageSrc;
           modalImage.alt = caption;
           modalCaption.textContent = caption;

           modal.style.display = 'block';
           document.body.classList.add('modal-open'); // Prevent scrolling when lightbox is open
       }

       function closeLightbox() {
           const modal = document.querySelector(".modal");
           modal.style.display = 'none';
           document.body.classList.remove('modal-open'); // Enable scrolling when lightbox is closed
       }

       // Close modal if clicked outside the image
       window.addEventListener("click", (event) => {
           const modal = document.querySelector(".modal");
           if (event.target === modal) {
               closeLightbox();
           }
       });
// Add this JavaScript to your existing script.js file

function openModal(imageSrc, caption) {
    const modal = document.querySelector(".modal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = imageSrc;
    modalImage.alt = caption;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = 'none';
}

// Close modal if clicked outside the image
window.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal");
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard navigation for the modal
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

       // Keyboard navigation for the lightbox
       document.addEventListener("keydown", (event) => {
           if (event.key === "Escape") {
               closeLightbox();
           }
       });
