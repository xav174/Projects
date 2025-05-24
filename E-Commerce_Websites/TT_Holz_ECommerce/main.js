const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

products = [
    {
        id: 1,
        title: "Boll Forte III",
        price: "59,90",
        description: 
            {
                tempo: 9.3,
                haerte: 7.8,
                dicke: 5.00,
                groeße: "158 x 153mm",
                maße: "FL: 100×25×32mm / ST: 100×23×27 mm / AN: 100×25×30 mm"
            }
        ,
        variants: [
            {
                img: "./assets/blade_boll_forte.png"
            },
            {
                variant: "Konkav (FL)",
                img: "./assets/blade_boll_forte_iii_fl.jpg"
            },
            {
                variant: "Gerade (ST)",
                img: "./assets/blade_boll_forte_iii_st.jpg"
            },
            {
                variant: "Anatomisch (AN)",
                img: "./assets/blade_boll_forte_iii_an.jpg"
            }
        ]
    }, {
        id: 2,
        title: "Fan Zhendong ZLC",
        price: "239,90",
        description: 
            {
                tempo: 11.7,
                haerte: 10.8,
                dicke: 5.5,
                groeße: "157 x 150mm",
                maße: "FL: 100×25×34 mm / ST: 100×23×28 mm / CS: 82×24×32 mm"
            }
        ,
        variants: [
            {
                img: "./assets/blade_fan_zhen_dong_zlc.png"
            },
            {
                variant: "Gerade (ST)",
                img: "./assets/blade_fan_zhendong_zlc_st.jpg"
            },
            {
                variant: "Chinese Penhold (CS)",
                img: "./assets/blade_fan_zhendong_zlc_cs.jpg"
            },
            {
                variant: "Konkav (FL)",
                img: "./assets/blade_fan_zhendong_zlc_fl.jpg"
            }
        ]
    }, {
        id: 3,
        title: "Dimitrij Ovtcharov Innerforce ALC",
        price: "179,90",
        description: 
            {
                tempo: 11.7,
                haerte: 10.5,
                dicke: 6.2,
                groeße: "158 x 152mm",
                maße: "FL: 100×25×34 mm / ST: 100×23×28 mm / AN: 100×25×34 mm"
            }
        ,
        variants: [
            {
                img: "./assets/blade_ovtcharov_alc.png"
            },
            {
                variant: "Konkav (FL)",
                img: "./assets/blade_ovtcharov_alc_fl.jpg"
            },
            {
                variant: "Gerade (ST)",
                img: "./assets/blade_ovtcharov_alc_st.jpg"
            },
            {
                variant: "Anatomisch (AN)",
                img: "./assets/blade_ovtcharov_alc_an.jpg"
            }
        ]
    }, {
        id: 4,
        title: "Zhang Jike T5000",
        price: "159,90",
        description: 
            {
                tempo: 12.6,
                haerte: 11.3,
                dicke: 5.6,
                groeße: "157 x 150mm",
                maße: "FL 100×25 ×34 mm / ST 100×23×28 mm / AN 100×24×32 mm"
            }
        ,
        variants: [
            {
                img: "./assets/blade_zhang_jike.png"
            },
            {
                variant: "Anatomisch (AN)",
                img: "./assets/blade_zhang_jike_t5000_an.jpg"
            },
            {
                variant: "Gerade (ST)",
                img: "./assets/blade_zhang_jike_t5000_st.jpg"
            },
            {
                variant: "Konkav (FL)",
                img: "./assets/blade_zhang_jike_t5000_fl.jpg"
            }
        ] 
    }
];

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
        });
    })

    currProductVariant.forEach((variant, index) => {
        variant.addEventListener('click', () => {
            currProductImg.src = choosenProduct.variants[index + 1].img;
        });
    })
});
