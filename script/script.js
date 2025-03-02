const menuButtons = document.querySelectorAll('.navbar :where(#menu-close-button, #menu-open-button)');

function handleResize() {
  if (window.innerWidth > 900) {
	menuButtons.forEach(button => button.style.display = 'none');
  } else {
	menuButtons.forEach(button => button.style.display = 'block');
  }
}

// Chama a função no carregamento da página
handleResize();

// Adiciona um listener para o evento de redimensionamento da janela
window.addEventListener('resize', handleResize);

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
menuOpenButton.addEventListener("click", () => {
	
document.body.classList.toggle("show-mobile-menu")
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
	link.addEventListener("click", () => menuOpenButton.click());
})

const swiper = new Swiper('.slider-wrapper', {

loop: true,
spaceBetween:25,
grabCursor:true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
clickable:true,
dynamicBullets:true,
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

breakpoints:{
0: {
	slidesPerView:1
},
768: {
	slidesPerView:2
},
1024: {
	slidesPerView:3
}
}
});