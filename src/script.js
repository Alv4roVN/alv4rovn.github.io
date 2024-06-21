document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-ed');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-t');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});

let currentIndex = 0;

function showCarouselItem(index) {
    const items = document.querySelectorAll('.carousel-item');
     if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;

    items.forEach((item, i) => {
        item.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function moveCarousel(step) {
    currentIndex += step;
    showCarouselItem(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showCarouselItem(currentIndex);
});