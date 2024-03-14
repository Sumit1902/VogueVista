// Code for shop.html
// for clicking product and redirecting it to shop-product.html
const products = document.querySelectorAll('.pro');

products.forEach((pro) => {
  pro.addEventListener('click', () => {
    window.location.href = 'shop-product.html';
  });
});


// Code for shop-product.html

// for switching the below small images with the main image

var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName("single-img-col");

smallImg[0].addEventListener("click",() =>{
    MainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click",() =>{
    MainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click",() =>{
    MainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click",() =>{
    MainImg.src = smallImg[3].src;
});