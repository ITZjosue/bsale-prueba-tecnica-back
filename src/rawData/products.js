const products = [
    {
    id: 5,
    name: "ENERGETICA MR BIG",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    price: 1490,
    discount: 20,
    category: 1
    },
    {
    id: 6,
    name: "ENERGETICA RED BULL",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    price: 1490,
    discount: 0,
    category: 1
    },
    {
    id: 7,
    name: "ENERGETICA SCORE",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
    price: 1290,
    discount: 0,
    category: 1
    },
    {
    id: 8,
    name: "PISCO ALTO DEL CARMEN 35º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
    price: 7990,
    discount: 10,
    category: 2
    },
    {
    id: 9,
    name: "PISCO ALTO DEL CARMEN 40º ",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
    price: 5990,
    discount: 0,
    category: 2
    },
    {
    id: 10,
    name: "PISCO ARTESANOS 35º ",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/artesanos8818.jpg",
    price: 3990,
    discount: 0,
    category: 2
    },
    {
    id: 11,
    name: "PISCO BAUZA 40º ",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/bauza408831.jpg",
    price: 4990,
    discount: 0,
    category: 2
    },
    {
    id: 12,
    name: "PISCO CAMPANARIO 35º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario8845.jpg",
    price: 2990,
    discount: 20,
    category: 2
    },
    {
    id: 13,
    name: "PISCO CAMPANARIO 40º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/campanario408881.jpg",
    price: 3990,
    discount: 20,
    category: 2
    },
    {
    id: 14,
    name: "PISCO ESPIRITU DEL ELQUI 40º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8936.jpg",
    price: 5990,
    discount: 20,
    category: 2
    },
    {
    id: 15,
    name: "PISCO ESPIRITU DEL ELQUI 45º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8957.jpg",
    price: 6990,
    discount: 5,
    category: 2
    },
    {
    id: 16,
    name: "PISCO HORCON QUEMADO 35º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon359049.jpg",
    price: 6990,
    discount: 20,
    category: 2
    },
    {
    id: 17,
    name: "PISCO HORCON QUEMADO 40º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon409062.jpg",
    price: 7990,
    discount: 20,
    category: 2
    },
    {
    id: 18,
    name: "PISCO HORCON QUEMADO 46º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon469075.jpg",
    price: 8990,
    discount: 20,
    category: 2
    },
    {
    id: 19,
    name: "PISCO MISTRAL 35º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral359200.jpg",
    price: 4990,
    discount: 20,
    category: 2
    },
    {
    id: 20,
    name: "PISCO MISTRAL 40º ",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mistral409215.jpg",
    price: 4990,
    discount: 20,
    category: 2
    },
    {
    id: 21,
    name: "PISCO TRES ERRES 35º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr359305.jpg",
    price: 4590,
    discount: 20,
    category: 2
    },
    {
    id: 22,
    name: "PISCO TRES ERRES 40º",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/rrr409319.jpg",
    price: 4990,
    discount: 20,
    category: 2
    },
    {
    id: 23,
    name: "RON BACARDI AÑEJO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
    price: 4990,
    discount: 0,
    category: 3
    },
    {
    id: 24,
    name: "RON BACARDI 8 AÑOS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardianejo9463.jpg",
    price: 5990,
    discount: 0,
    category: 3
    },
    {
    id: 25,
    name: "RON ABUELO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/abuelo9475.jpg",
    price: 3990,
    discount: 0,
    category: 3
    },
    {
    id: 26,
    name: "RON BARCELO AÑEJO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
    price: 4990,
    discount: 0,
    category: 3
    },
    {
    id: 27,
    name: "RON BARCELO DORADO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/barcelodorado9567.jpg",
    price: 3990,
    discount: 0,
    category: 3
    },
    {
    id: 28,
    name: "RON FLOR DE CAÑA 4 AÑOS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/flor49664.jpg",
    price: 3990,
    discount: 0,
    category: 3
    },
    {
    id: 29,
    name: "RON FLOR DE CAÑA 5 AÑOS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/flor59677.jpg",
    price: 4590,
    discount: 0,
    category: 3
    },
    {
    id: 30,
    name: "RON HAVANA AÑEJO RESERVA",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaan-ejo9750.jpg",
    price: 6990,
    discount: 0,
    category: 3
    },
    {
    id: 31,
    name: "RON HAVANA ESPECIAL",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaespecial9768.jpg",
    price: 5990,
    discount: 20,
    category: 3
    },
    {
    id: 32,
    name: "RON PAMPERO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/pampero-especial0296.jpg",
    price: 5490,
    discount: 20,
    category: 3
    },
    {
    id: 33,
    name: "RON PAMPERO ANIVERSARIO",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg",
    price: 20000,
    discount: 15,
    category: 3
    },
    {
    id: 34,
    name: "ENERGETICA MONSTER RIPPER",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
    price: 1990,
    discount: 0,
    category: 1
    },
    {
    id: 35,
    name: "ENERGETICA MAKKA DRINKS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
    price: 1190,
    discount: 0,
    category: 1
    },
    {
    id: 36,
    name: "ENERGETICA MONSTER VERDE",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",
    price: 1990,
    discount: 0,
    category: 1
    },
    {
    id: 37,
    name: "COCA COLA ZERO DESECHABLE",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/cocazero9766.jpg",
    price: 1490,
    discount: 0,
    category: 4
    },
    {
    id: 38,
    name: "RON BOTRAN AÑEJO 5 AÑOS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/ronbotran9337.jpg",
    price: 4990,
    discount: 0,
    category: 3
    },
    {
    id: 39,
    name: "RON MITJANS",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/mitjan6396.jpg",
    price: 2990,
    discount: 0,
    category: 3
    },
    {
    id: 47,
    name: "Maní salado",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",
    price: 600,
    discount: 0,
    category: 5
    },
    {
    id: 48,
    name: "SPRITE 1 1/2 Lts",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-lata-33cl5575.jpg",
    price: 1500,
    discount: 0,
    category: 4
    },
    {
    id: 50,
    name: "SPRITE 2 Lt",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/sprite-2lt4365.jpg",
    price: 1800,
    discount: 0,
    category: 4
    },
    {
    id: 52,
    name: "Fanta",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
    price: 1500,
    discount: 0,
    category: 4
    },
    {
    id: 53,
    name: "Mani Sin Sal",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",
    price: 500,
    discount: 0,
    category: 5
    },
    {
    id: 54,
    name: "Papas Fritas Lisas Bolsa Grande",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
    price: 1490,
    discount: 0,
    category: 5
    },
    {
    id: 55,
    name: "Papas Fritas Bolsa Pequeña",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
    price: 500,
    discount: 0,
    category: 5
    },
    {
    id: 56,
    name: "Papas Fritas Tarro",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
    price: 1990,
    discount: 0,
    category: 5
    },
    {
    id: 57,
    name: "COCA COLA NORMAL DESECHABLE 1500cc",
    url_image: null,
    price: 1500,
    discount: 0,
    category: 4
    },
    {
    id: 58,
    name: "COCA COLA LIGHT DESECHABLE",
    url_image: null,
    price: 1500,
    discount: 0,
    category: 4
    },
    {
    id: 68,
    name: "Bebida Sprite 1 Lt",
    url_image: null,
    price: 1250,
    discount: 10,
    category: 4
    },
    {
    id: 77,
    name: "ENERGETICA MONSTER RIPPER",
    url_image: "",
    price: 1990,
    discount: 0,
    category: 1
    },
    {
    id: 79,
    name: "ENERGETICA MONSTER VERDE",
    url_image: "",
    price: 1990,
    discount: 0,
    category: 1
    },
    {
    id: 87,
    name: "PISCO MISTRAL 35°",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/358978.jpg",
    price: 4990,
    discount: 0,
    category: 2
    },
    {
    id: 88,
    name: "PISCO MISTRAL GRAN NOBEL 40°",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",
    price: 19900,
    discount: 0,
    category: 2
    },
    {
    id: 89,
    name: "PISCO MISTRAL 40°",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/409346.jpg",
    price: 4990,
    discount: 0,
    category: 2
    },
    {
    id: 90,
    name: "PISCO MISTRAL 46°",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/469463.jpg",
    price: 7890,
    discount: 0,
    category: 2
    },
    {
    id: 91,
    name: "PISCO MISTRAL NOBEL 40°",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
    price: 19990,
    discount: 0,
    category: 2
    },
    {
    id: 92,
    name: "PISCO MISTRAL NOBEL 46",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobelanejado9639.jpg",
    price: 15990,
    discount: 15,
    category: 2
    },
    {
    id: 98,
    name: "Cerveza Escudo Normal LATA 350CC",
    url_image: "",
    price: 600,
    discount: 0,
    category: 6
    },
    {
    id: 99,
    name: "Cerveza Escudo Sin Filtrar LATA 350CC",
    url_image: "",
    price: 800,
    discount: 0,
    category: 6
    },
    {
    id: 104,
    name: "ABSOLUT",
    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
    price: 8990,
    discount: 30,
    category: 7
    }
    ]

    module.exports = products