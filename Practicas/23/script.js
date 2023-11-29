document.addEventListener('DOMContentLoaded', function() {
    const floatingCard = document.getElementById('floating-card');
    const triggerArea = document.querySelector('.trigger-area');

    triggerArea.addEventListener('mouseenter', function() {
        floatingCard.style.left = '0';
    });

    floatingCard.addEventListener('mouseleave', function() {
        floatingCard.style.left = '-90%';
    });
});

