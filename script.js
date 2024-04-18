// script.js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    
    function checkItems() {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkItems);
    checkItems(); // Check items on page load
});