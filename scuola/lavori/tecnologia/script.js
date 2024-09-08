document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#4CAF50';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#333';
        });
    });
});