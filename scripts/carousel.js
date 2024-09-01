let slideIndex = 0;

function handleCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        showSlides(slideIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlides(slideIndex + 1);
    });

    showSlides(slideIndex);
}

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}