// assets/js/global.js

document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    fetch('assets/common/header.html') // Adjust the path as needed
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    fetch('assets/common/footer.html') // Adjust the path as needed
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Your other JavaScript code goes here
    console.log('Global JavaScript loaded.');
});
