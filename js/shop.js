// Code for shop.html
const products = document.querySelectorAll('.pro');
const MainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName("small-img");
// const proImg = document.querySelectorAll('div-img');

products.forEach((pro) => {
  pro.addEventListener('click', () => {
    window.location.href = '/html/shop-product.html';
  });
});


// Code for shop-product.html
// for switching the below small images with the main image
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