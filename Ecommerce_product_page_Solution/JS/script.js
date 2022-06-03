const hambugerMenu=document.querySelector('.hambuger_menu');
const menu=document.querySelector('.menu');
const closeMenu=document.querySelector('.closeMenu');
const cartItemList=document.querySelector('.my-cart');
const cartIcon=document.querySelector('.cart');
const addItem=document.querySelector(".increment");
const lessItem=document.querySelector('.decrement');
const quantity=document.querySelector('.quantity');
const heroImage=document.querySelector('.main_product_img');
const thumbNailImage=document.querySelectorAll('.thumbnailImg');
let cartItemCount=quantity.innerHTML;
//to show and hide the cart details page 
closeMenu.addEventListener('click',HideMenu);
cartIcon.addEventListener('click',() => {
    cartItemList.classList.toggle('hidden');
});
hambugerMenu.addEventListener('click',ShowMenu);
function HideMenu(){
    menu.classList.add("hidden");
}
function ShowMenu(){
    menu.classList.remove('hidden');
}

//decrementing Items
lessItem.addEventListener('click',() =>{
    // console.log(quantity.innerHTML);

    if(cartItemCount>0){
        cartItemCount--;
        if(cartItemCount>=0) {
            quantity.innerHTML=cartItemCount;
        }
        
    }
});
//incrementing the product counter 
addItem.addEventListener('click',() =>{
    if(cartItemCount>=0){
        cartItemCount++;
        if(cartItemCount>0){
            quantity.innerHTML=cartItemCount;
        }
    }
});

// handle clicks once an thumb Nail Image is clicked
//remove the current Active Class
thumbNailImage.forEach(img =>{
    img.addEventListener('click',onThumbNailClick)
});
function onThumbNailClick(e){
    thumbNailImage.forEach(image=>{
        image.classList.remove('active')    ;
    });
    e.target.classList.add('active');
    //change to the corresponding Hero Image
    heroImage.src
}
console.log(thumbNailImage);