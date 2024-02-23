/*=============== DIALOG ===============*/

/*=============== BUDGET SECTION ===============*/
/*=============== Sort your expenses ===============*/
const sortBtn = document.querySelector('.sort-btn')
const sortDialog = document.querySelector('.sort-dialog')

// btn click
sortBtn.addEventListener('click', () => {
    sortDialog.show()
})

/*=============== Emergency Funds ===============*/
const emergencyBtn = document.querySelector('.emergency-btn')
const emergencyDialog = document.querySelector('.emergency-dialog')

//btn click
emergencyBtn.addEventListener('click', () => {
    emergencyDialog.show()
})

/*=============== Cut your expenses ===============*/
const expensesBtn = document.querySelector('.expenses-btn')
const expensesDialog = document.querySelector('.expenses-dialog')

// btn click
expensesBtn.addEventListener('click', () => {
    expensesDialog.show()
})

/*=============== DEBT SECTION ===============*/
/*=============== which debt should I pay ===============*/
const debtBtn = document.querySelector('.debt-btn')
const debtDialog = document.querySelector('.debt-dialog')

// btn click
debtBtn.addEventListener('click', () => {
    debtDialog.show()
})

/*=============== good vsw bad debt ===============*/
const goodvsbadBtn = document.querySelector('.goodvsbad-btn')
const goodvsbadDialog = document.querySelector('.goodvsbad-dialog')

// btn click
goodvsbadBtn.addEventListener('click', () => {
    goodvsbadDialog.show()
})

/*=============== credit ===============*/
const creditBtn = document.querySelector('.credit-btn')
const creditDialog = document.querySelector('.credit-dialog')

// btn click
creditBtn.addEventListener('click', () => {
    creditDialog.show()
})

/*=============== INVEST SECTION ===============*/
/*=============== invest ===============*/
const investBtn = document.querySelector('.invest-btn')
const investDialog = document.querySelector('.invest-dialog')

// btn click
investBtn.addEventListener('click', () => {
    investDialog.show()
})



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Once scroll is > 50 viewport height, add scroll-header class to header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER ===============*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active_link')
		}else{
			sectionsClass.classList.remove('active_link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: true,
})

//adding animations to a few of the classes to be more interactive
sr.reveal('.home__title')
sr.reveal('.home__description', {delay: 300})
sr.reveal('.home_feature-cards', {delay: 400})
sr.reveal('.section_image', {delay: 400})
