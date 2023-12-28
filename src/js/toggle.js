const toggle = document.getElementById('toggle');
const navMenu = document.getElementById('nav-menu');
console.log(navMenu);
console.log(toggle);


toggle.addEventListener('click', function(e) {
     if(navMenu.classList.contains('d-none') )
     {
          navMenu.classList.remove('d-none');
          navMenu.classList.add('d-block');
     } 
     else {
          navMenu.classList.remove('d-block');
          navMenu.classList.add('d-none');
     }
})