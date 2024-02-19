document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    fetch('assets/common/header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    fetch('assets/common/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Fire Particles
    const fireContainer = document.getElementById('fire-container');
    createFireParticles();

    function createFireParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'fire-particle';
            particle.style.setProperty('--delay', Math.random() * 5 + 5); // Random delay between 5 and 10 seconds
            fireContainer.appendChild(particle);

            animateParticle(particle);
        }
    }

    function animateParticle(particle) {
        const duration = Math.random() * 1 + 1; // Random duration between 1 and 2 seconds

        particle.style.animationDuration = `${duration}s`;

        particle.addEventListener('animationiteration', () => {
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
        });
    }
});
