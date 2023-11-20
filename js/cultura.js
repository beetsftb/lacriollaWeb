document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button-cultura');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.parentElement.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            this.textContent = this.textContent === '+' ? '-' : '+';
        });
    });
});
