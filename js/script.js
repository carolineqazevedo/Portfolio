document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const scrollLine = document.querySelector('.scroll');
  const menuLinks = document.querySelectorAll('.menu a');

  function updateActiveLink() {
    const scrollPosition = container.scrollLeft;

    menuLinks.forEach(link => {
      const targetSection = document.querySelector(link.getAttribute('href'));

      if (
        targetSection.offsetLeft <= scrollPosition &&
        targetSection.offsetLeft + targetSection.offsetWidth > scrollPosition
      ) {
        menuLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }

  function smoothScroll(target) {
    container.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth'
    });
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      link.classList.toggle('active');
      const target = document.querySelector(link.getAttribute('href'));
      smoothScroll(target);
    });
  });

  container.addEventListener('scroll', updateActiveLink);
});

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');

  function adjustMenuPosition() {
    if (window.innerWidth <= 770 || window.innerHeight <= 1025) {
      menu.classList.add('bottom-menu');
    } else {
      menu.classList.remove('bottom-menu');
    }
  }

  window.addEventListener('load', adjustMenuPosition);
  window.addEventListener('resize', adjustMenuPosition);
});

document.addEventListener('DOMContentLoaded', function() {
  const typingEffectElement = document.querySelector('.apresentacao h1');
  typeWrite(typingEffectElement);

  function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)
  
  });
  }
  const titulo = document.querySelector('.apresentacao h1');
  typeWrite(titulo);
});

