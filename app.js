document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    const aboutBtn = document.getElementById('aboutBtn');
    const missionBtn = document.getElementById('missionBtn');
    const additionalText = document.getElementById('additionalText');

    const aboutText = `
        BattenB Consulting is a leading business and electricity consulting 
        firm dedicated to excellence and committed to delivering tangible results. 
        With extensive experience across various industries, our consultants bring deep expertise, innovative solutions, 
        and a client-focused approach to every project.
    `;
    const missionText = `
        Our mission at BattenB Consulting is to empower businesses with the strategies, insights, and tools they need to achieve sustainable 
        growth and success, particularly in the field of electricity consulting. 
        We believe in building long-term partnerships based on trust, integrity, and mutual success.
    `;

    aboutBtn.addEventListener('click', () => {
        additionalText.innerHTML = aboutText;
        aboutBtn.classList.add('active');
        missionBtn.classList.remove('active');
    });

    missionBtn.addEventListener('click', () => {
        additionalText.innerHTML = missionText;
        missionBtn.classList.add('active');
        aboutBtn.classList.remove('active');
    });

    aboutBtn.classList.add('active');
    additionalText.innerHTML = aboutText;

    // Benefit section script
    const benefitButtons = document.querySelectorAll('.benefits-section .button-group .btn');
    const benefitItems = document.querySelectorAll('.benefit-item');

    benefitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.getAttribute('data-target'));

            benefitItems.forEach(item => {
                item.classList.remove('active');
            });

            target.classList.add('active');

            benefitButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });

    // Smooth scrolling
    const links = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
