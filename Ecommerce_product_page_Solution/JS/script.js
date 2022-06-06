const hambugerMenu=document.querySelector('.hambuger_menu');
const menu=document.querySelector('.menu');
const closeMenu=document.querySelector('.closeMenu');

const cartItemList=document.querySelector('.my-cart');
const cartIcon=document.querySelector('.cart');
const addItem=document.querySelector(".increment");

const lessItem=document.querySelector('.decrement');
const quantity=document.querySelector('.quantity');
const heroImage=document.querySelector('.main_product_img');

const cartCount=document.querySelector('.cart-count');
const thumbNailImage=document.querySelectorAll('.thumbnailImg');
const cartDetails=document.querySelector(".cart-details");

//get the constants for the Hero Images
const nextImageBtn=document.querySelector('.next-img');
const prevImageBtn=document.querySelector(".pre-img");

const checkOutBtn=document.querySelector('.checkout');
const emptyCart=document.querySelector('.empty-cart');
//get the count of items in the cart
let cartItemCount=parseInt(quantity.innerHTML);
let ItemCount=cartItemCount;
const overlay=document.querySelector('.lightBoxOverlay');
const productImage=document.querySelector('.product_image');

//lightbox interactivity
const closeLightBox=document.querySelector('.closeOverlayImg');
const prevOverLayImage=document.querySelector('.preOverlay');
const nextOverlayImage=document.querySelector('.nextOverlay');
const overlayHeroImage=document.querySelector('.overlayMainProductImage');
const overlayThumbnailImage=document.querySelectorAll('.overlayThumbnailImg');

//adding interactivity
closeLightBox.addEventListener('click',closeOverlay);
prevOverLayImage.addEventListener('click',movePrevOverlayImage);
nextOverlayImage.addEventListener('click',moveNextOverlayImage);

//adding Items to Cart
const cartBtn=document.querySelector('.cartBtn');

//to show and hide the cart details page 
closeMenu.addEventListener('click',HideMenu);
cartBtn.addEventListener("click",addItemToCart);

//styles to help in adding the overlay
heroImage.addEventListener('click',onHeroImageClick)

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
    heroImage.src=e.target.src.replace("-thumbnail","");
    console.log(heroImage.src);
}

nextImageBtn.addEventListener('click',moveNextImage);
prevImageBtn.addEventListener('click',movePrevImage);

function movePrevImage(){
    let imageIndex=getImageIndex();
    imageIndex--;
    if(imageIndex<1){
        //make the index back to one
        imageIndex=4    ;
    }
    setHeroImage(imageIndex);
}
function moveNextImage(){
    let imageIndex=getImageIndex();
    imageIndex++;
    if(imageIndex>4){
        //make the index back to one
        imageIndex=1;
    }
    setHeroImage(imageIndex);
}
function getImageIndex(){
    const ImageIndex= parseInt(heroImage.src.split('\\').pop().split('/').pop().replace('.jpg',"").replace('image-product-','')); 
    return ImageIndex;
}
function setHeroImage(imageIndex){
    heroImage.src=`Images/image-product-${imageIndex}.jpg`;
    thumbNailImage.forEach(image => {
        image.classList.remove('active');
    });
    thumbNailImage[imageIndex-1].classList.add('active');
}

const ItemPrice=250.00;
const discount= 0.5;
//add Item to Cart function
function addItemToCart(){
    console.log(typeof cartItemCount);
    ItemCount+=cartItemCount;
    //template of the item in cart
    const CartItem=
    `
    <img src="Images/image-product-1-thumbnail.jpg" alt="Item In Cart" class="item-img">
        <div class="item-details">
            <p class="product-Name">Autumn Limited Edition....</p>
                <div class="price-details">
                    <div class="item-price">$${(ItemPrice*discount).toFixed(2)}</div> x
                    <div class="item-quantity">${ItemCount}</div>
                    <div class="total-price">$${(ItemPrice*discount*ItemCount).toFixed(2)}</div>
            </div>
        </div>
    <img src="Images/icon-delete.svg" alt="delete Icon" id='deleteBtn'>
    `
    cartDetails.innerHTML=CartItem;
    const deleteBtn=document.querySelector('#deleteBtn');
    deleteBtn.addEventListener('click',deleteItem);
    updateCartUI(ItemCount);
    updateEmptyCartView(ItemCount);
    updateCheckout(ItemCount);
}

function updateCartUI(ItemCount){
    if(ItemCount==0){
        if(!cartCount.classList.contains('hidden')){
            cartCount.classList.add("hidden");
        }
    }else{
        cartCount.classList.remove('hidden');
        cartCount.innerHTML=ItemCount;
    }
}
function updateCheckout(ItemCount){
    if(ItemCount==0){
        if(!checkOutBtn.classList.contains('hidden')){
            checkOutBtn.classList.add('hidden');
        }
    }else{
        checkOutBtn.classList.remove('hidden');
    }
}
function updateEmptyCartView(ItemCount){
    if(ItemCount==0){
        if(emptyCart.classList.contains('hidden')){
            emptyCart.classList.remove('hidden');
        }
    }else{
        emptyCart.classList.add('hidden');
    }
}
function deleteItem(){
    console.log(ItemCount);
    ItemCount--;
    const itemCount=document.querySelector('.item-quantity');
    const totalPrice=document.querySelector('.total-price');
    itemCount.innerHTML=ItemCount;
    totalPrice.innerHTML=`${(ItemPrice*discount*ItemCount).toFixed(2)}`;
    if(ItemCount==0){
        cartDetails.innerHTML=``;
        updateCheckout(ItemCount);
        updateEmptyCartView(ItemCount);
    }
}
function onHeroImageClick(){
    overlay.classList.remove('hidden');
}
function closeOverlay(){
    overlay.classList.add('hidden');
}
function getOverImageIndex(){
    const overlayImageIndex= parseInt(overlayHeroImage.src.split('\\').pop().split('/').pop().replace('.jpg',"").replace('image-product-','')); 
    return overlayImageIndex;
}
function movePrevOverlayImage(){
    let overlayImageIndex=getOverImageIndex();
    overlayImageIndex++;
    if(overlayImageIndex>4){
        //make the index back to one
        overlayImageIndex=1;
    }
    setOverlayImage(overlayImageIndex);
}
function moveNextOverlayImage(){
    let overlayImageIndex=getOverImageIndex();
    overlayImageIndex--;
    if(overlayImageIndex<1){
        //make the index back to one
        overlayImageIndex=4    ;
    }
    setOverlayImage(overlayImageIndex);
}
function setOverlayImage(overlayIndex){
    overlayHeroImage.src=`Images/image-product-${overlayIndex}.jpg`;
    overlayThumbnailImage.forEach(image => {
        image.classList.remove('overlay-active');
    });
    overlayThumbnailImage[overlayIndex-1].classList.add('overlay-active');
}