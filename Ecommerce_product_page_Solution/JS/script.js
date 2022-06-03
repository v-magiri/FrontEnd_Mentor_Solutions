const hambugerMenu=document.querySelector('.hambuger_menu');
const menu=document.querySelector('.menu');
const closeMenu=document.querySelector('.closeMenu');
closeMenu.addEventListener('click',HideMenu);
hambugerMenu.addEventListener('click',ShowMenu);
function HideMenu(){
    menu.classList.add("hidden");
}
function ShowMenu(){
    menu.classList.remove('hidden');
}