document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    const aboutBtn = document.getElementById('aboutBtn');
    const missionBtn = document.getElementById('missionBtn');
    const additionalText = document.getElementById('additionalText');

    const aboutText = `
        Batten.B Consulting is a premier business consulting firm with a passion for excellence and a commitment to delivering results. 
        With years of experience across various industries, our consultants bring deep knowledge, innovative thinking, and a client-centric 
        approach to every project.
    `;
    const missionText = `
        Our mission is to empower businesses with the strategies, insights, and tools they need to achieve sustainable growth and success. 
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
});
