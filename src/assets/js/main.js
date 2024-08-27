// src/assets/js/main.js
export function toggleContent(button) {
    const cardBody = button.parentElement;
    const contentFull = cardBody.querySelector('.content-full');
    const contentSummary = cardBody.querySelector('.content-summary');

    if (contentFull.style.display === 'none') {
        contentFull.style.display = 'block';
        contentSummary.style.display = 'none';
        button.textContent = 'Read Less';
    } else {
        contentFull.style.display = 'none';
        contentSummary.style.display = 'block';
        button.textContent = 'Read More';
    }
}
