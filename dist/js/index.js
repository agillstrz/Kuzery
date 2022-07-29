const hamburgermenu =  document.querySelector('#hamburgermenu');
const navmenu = document.querySelector('#nav-menu');
hamburgermenu.addEventListener('click', function() { 
    hamburgermenu.classList.toggle('halo');
    navmenu.classList.toggle('hidden');
 });

window.onscroll = () => {

const header =  document.querySelector('header');
const fixnav = header.offsetTop;
if (window.pageYOffset > fixnav) {
     header.classList.add('navbarfix');
}
else{
    header.classList.remove('navbarfix');
}
}