const iconWrap = document.getElementById('iconWrap')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')



iconWrap.addEventListener('click',() => {
	mainMenu.classList.toggle('hide-menu')
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
})

// Вибираємо всі посилання навігації
const navLinks = document.querySelectorAll('nav a');

// Додаємо обробник подій для кожного посилання
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});

// Функція для плавного переходу до розділу
function scrollToSection(event) {
    event.preventDefault(); // Зупиняємо перехід за замовчуванням
    
    const targetId = this.getAttribute('href'); // Отримуємо ідентифікатор розділу
    
    // Плавно прокручуємо до цього розділу
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

const topButton=document.getElementById("topButton")
const topPoint=document.getElementById("topPoint")
topButton.addEventListener("click", function(){
topPoint.scrollIntoView({behavior:"smooth"});
})

