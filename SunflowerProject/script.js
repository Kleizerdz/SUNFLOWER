const petals = document.querySelectorAll('.petal');

function animateFlower() {
    petals.forEach((petal, index) => {
        petal.style.transition = 'transform 1s ease-in-out';
        setTimeout(() => {
            petal.style.transform += ` rotate(${index * 45}deg)`; // Adjust for 8 petals (360 / 8 = 45 degrees)
        }, index * 300);
    });
}

animateFlower();
