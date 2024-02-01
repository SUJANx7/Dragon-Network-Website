// global.js

document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    fetch('assets/common/header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('header').innerHTML = html;
        });

    // Load Footer
    fetch('assets/common/footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('footer').innerHTML = html;
        });
});
