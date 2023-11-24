// Отримання елемента pop-up меню
const popup = document.querySelector('.pop-up-menu');

// Відображення та ховання pop-up меню при прокрутці
window.addEventListener('scroll', function () {
  const currentScrollPos = window.scrollY;
  console.log(currentScrollPos);

  if (currentScrollPos > 800) {
    // Прокрутка вниз та більше 800 пікселів
    popup.classList.add('visible');
  } else {
    // Прокрутка вгору або менше 800 пікселів
    popup.classList.remove('visible');
  }

  prevScrollPos = currentScrollPos;

// Активні ссилки pop-up меню//

  // Отримання всіх ссилок pop-up меню
  const servicesLink = document.querySelector('#services-link');
  const amenitiesLink = document.querySelector('#amenities-link');
  const testimonialsLink = document.querySelector('#testimonials-link');
  const faqLink = document.querySelector('#faq-link');
  const contactLink = document.querySelector('#contact-link');

  //Відображення активної ссилки в певнй секції

  servicesLink.classList.remove('pop-up-link-active');
  amenitiesLink.classList.remove('pop-up-link-active');
  testimonialsLink.classList.remove('pop-up-link-active');
  faqLink.classList.remove('pop-up-link-active');
  contactLink.classList.remove('pop-up-link-active');

  if (currentScrollPos > 800 && currentScrollPos < 1400) {
    servicesLink.classList.add('pop-up-link-active');
  } else if (currentScrollPos > 1400 && currentScrollPos < 2300) {
    amenitiesLink.classList.add('pop-up-link-active');
  } else if (currentScrollPos > 2300 && currentScrollPos < 3000) {
    testimonialsLink.classList.add('pop-up-link-active');
  } else if (currentScrollPos > 3000 && currentScrollPos < 3600) {
    faqLink.classList.add('pop-up-link-active');
  } else if (currentScrollPos > 3600 && currentScrollPos < 4200) {
    contactLink.classList.add('pop-up-link-active');
  }
});