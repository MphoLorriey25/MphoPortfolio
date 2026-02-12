// Trigger animations on scroll
const animateItems = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    animateItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom){
            item.style.animationPlayState = 'running';
        }
    });
});

