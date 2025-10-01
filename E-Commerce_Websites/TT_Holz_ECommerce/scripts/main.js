import {products} from "../data/product.js"

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');


let choosenProduct = products[0];

const currProductImg = document.querySelector('.productImg');
const currProductTitle = document.querySelector('.productTitle');
const currProductPrice = document.querySelector('.productPrice');
const currProductVariant = document.querySelectorAll('.variant');
console.log(currProductVariant);

const currTempo = document.querySelector('.tempoNum');
const currHaerte = document.querySelector('.haerteNum');
const currDicke = document.querySelector('.dickeNum');
const currGroeße = document.querySelector('.groeßeNum');
const currMaße = document.querySelector('.maßeNum');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //slide ändern
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //product ändern
        choosenProduct = products[index];

        //product details ändern
        currProductTitle.textContent = choosenProduct.title;
        currProductPrice.textContent = choosenProduct.price + "€";
        currProductImg.src = choosenProduct.variants[0].img;

        currTempo.textContent = choosenProduct.description.tempo;
        currHaerte.textContent = choosenProduct.description.haerte;
        currDicke.textContent = choosenProduct.description.dicke + "mm";
        currGroeße.textContent = choosenProduct.description.groeße;
        currMaße.textContent = choosenProduct.description.maße;

        //Holzegriff Variante ändern
        currProductVariant.forEach((value, index) => {
            value.textContent = choosenProduct.variants[index + 1].variant;
            value.style.backgroundColor = "transparent";
        });
    }); 
});
currProductVariant.forEach((variant, index) => {
    variant.addEventListener('click', () => {
        currProductImg.src = choosenProduct.variants[index + 1].img;
        currProductVariant.forEach((variant) => {
            variant.style.backgroundColor = "transparent";
        });
        variant.style.backgroundColor = "#d4eaf7";
    });
});

const productBtn = document.querySelector('.productBtn');
const paymentWindow = document.querySelector('.payment');
const closePayment = document.querySelector('.close');

productBtn.addEventListener('click', () => {
    paymentWindow.style.display = "flex";
});

closePayment.addEventListener('click', () => {
    paymentWindow.style.display = "none";
});
