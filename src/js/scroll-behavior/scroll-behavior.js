document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('main');
    const sections = document.querySelectorAll('.full-section');
    let isScrolling = false;

    function scrollToSection(index) {
        isScrolling = true;
        sections[index].scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    sectionsContainer.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        
        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        const currentSection = Array.from(sections).findIndex(section => 
            section.getBoundingClientRect().top >= 0);
        
        const nextSection = currentSection + direction;
        if (nextSection >= 0 && nextSection < sections.length) {
            scrollToSection(nextSection);
        }
    }, { passive: false });
});