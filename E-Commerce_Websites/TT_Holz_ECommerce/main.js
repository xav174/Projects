const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

products = [
    {
        id: 1,
        title: "Boll Forte III",
        price: 59.90,
        description: [
            {
                tempo: 9.3,
                haerte: 7.8,
                dicke: 5.00,
                groeße: "158 x 153mm",
                maße: "FL: 100×25×32mm / ST: 100×23×27 mm / AN: 100×25×30 mm"
            }
        ],
        variant: [
            {
                variant1: "Konkav (FL)",
                img: "./assets/blade_boll_forte_iii_fl.jpg"
            },
            {
                variant2: "Gerade (ST)",
                img: "./assets/blade_boll_forte_iii_st.jpg"
            },
            {
                variant3: "Anatomisch (AN)",
                img: "./assets/blade_boll_forte_iii_an.jpg"
            }
        ]
    }, {
        id: 2,
        title: "Fan Zhendong ZLC",
        price: 239.90,
        description: [
            {
                tempo: 11.7,
                haerte: 10.8,
                dicke: 5.5,
                groeße: "157 x 150mm",
                maße: "FL: 100×25×34 mm / ST: 100×23×28 mm / CS: 82×24×32 mm"
            }
        ],
        variant: [
            {
                variant1: "Gerade (ST)",
                img: "./assets/blade_fan_zhendong_zlc_st.jpg"
            },
            {
                variant2: "Chinese Penhold (CS)",
                img: "./assets/blade_fan_zhendong_zlc_cs.jpg"
            },
            {
                variant3: "Konkav (FL)",
                img: "./assets/blade_fan_zhendong_zlc_fl.jpg"
            }
        ]
    }, {
        id: 3,
        title: "Dimitrij Ovtcharov Innerforce ALC",
        price: 179.90,
        description: [
            {
                tempo: 11.7,
                haerte: 10.5,
                dicke: 6.2,
                groeße: "158 x 152mm",
                maße: "FL: 100×25×34 mm / ST: 100×23×28 mm / AN: 100×25×34 mm"
            }
        ],
        variant: [
            {
                variant1: "Konkav (FL)",
                img: "./assets/blade_ovtcharov_alc_fl.jpg"
            },
            {
                variant2: "Gerade (ST)",
                img: "./assets/blade_ovtcharov_alc_st.jpg"
            },
            {
                variant3: "Anatomisch (AN)",
                img: "./assets/blade_ovtcharov_alc_an.jpg"
            }
        ]
    }, {
        id: 4,
        title: "Fan Zhendong ZLC",
        price: 159.90,
        description: [
            {
                tempo: 12.6,
                haerte: 11.3,
                dicke: 5.6,
                groeße: "157 x 150mm",
                maße: "FL 100×25 ×34 mm / ST 100×23×28 mm / AN 100×24×32 mm"
            }
        ],
        variant: [
            {
                variant1: "Anatomisch (AN)",
                img: "./assets/blade_zhang_jike_t5000_an.jpg"
            },
            {
                variant2: "Gerade (ST)",
                img: "./assets/blade_zhang_jike_t5000_st.jpg"
            },
            {
                variant3: "Konkav (FL)",
                img: "./assets/blade_zhang_jike_t5000_fl.jpg"
            }
        ] 
    }
];

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
});