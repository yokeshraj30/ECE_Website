let currentSlide = 0; // Declare currentSlide globally
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const updatesContainer = document.getElementById('updates-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you shortly.');
        form.reset();
    });

    const updates = [
        { date: '2024-09-01', title: 'New Semiconductor Material Discovered', description: 'A breakthrough in semiconductor materials promises more efficient electronic devices.' },
        { date: '2024-08-20', title: 'Wireless Charging Technology Improved', description: 'Recent advancements in wireless charging technology allow for faster and more efficient charging of electronic devices.' },
        { date: '2024-07-15', title: 'Next-Generation Communication Protocols Announced', description: 'New communication protocols are set to enhance data transfer speeds and reliability.' }
    ];

    function displayUpdates(updates) {
        updatesContainer.innerHTML = '';
        updates.forEach(update => {
            const updateElement = document.createElement('div');
            updateElement.className = 'update-item';
            updateElement.innerHTML = `
                <h3>${update.title}</h3>
                <p><strong>Date:</strong> ${update.date}</p>
                <p>${update.description}</p>
            `;
            updatesContainer.appendChild(updateElement);
        });
    }

    displayUpdates(updates);

    // Auto-slide (optional)
    setInterval(() => {
        changeSlide(1);
    }, 5000);

    // Initialize the first slide
    showSlide(currentSlide);
});
