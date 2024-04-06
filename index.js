const imageSlider = document.querySelector('.image-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 400; // Adjust this value as needed
    imageSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 400; // Adjust this value as needed
    imageSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
