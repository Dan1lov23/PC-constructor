let finalAssembly = "";

let sum = 0;

let allImage = [
    "",
    "https://microless.com/cdn/products/83d45d3032a1af1f23fb08b8ffa3f8a6-hi.jpg",
    "https://microless.com/cdn/products/45f6c7d92284e43370239781bdb28006-hi.jpg",
    "https://lian-li.com/wp-content/uploads/2020/11/mesh-p-index.jpg",
    "https://static.nix.ru/images/fractal-design-meshify-2-litetg-light-tint-68712227431.jpeg?good_id=687122&width=500&height=500&view_id=27431",
    "https://basket-17.wbbasket.ru/vol2800/part280089/280089580/images/big/1.webp",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/6c85df97c736e02dfc97d85c77d8564b/78bcf2918fdf2d1d3e02dde1e9007e03ed747f82bd81c8a595845edcdbf2582d.jpg.webp",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/6a373741b52ca823e1c13a1ba3e7c385/0b2effb5e95b28fcbd055f1414ea60e25ea1c48a2bc543d9afa5ee2d0d3c8740.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/bbd34c68dedfd816f74f2e1c8982ee28/a456db21c4184e22b75ccb0c07c70c520aacaa20efed5a50da6e0c6c3d17c2d7.jpg.webp",
    "https://main-cdn.sbermegamarket.ru/big1/hlr-system/141/857/483/812/213/53/600015310419b0.jpeg",
    "https://tehpos.ru/image/cache/catalog/msi/msi-geforce-rtx-4060-ti-ventus-3x-e-8g-800x800.webp",
    "https://gadgets-news.ru/wp-content/uploads/2022/09/geforce-rtx-4090.jpg",
    "https://ir.ozone.ru/s3/multimedia-8/c1000/6753326156.jpg"
];

let allArray = [
    // путсая строка как 0 эллемент
    "",
    // корпуса
    "Cooler Master HAF 700 Evo",
    "Fractal Design Define 7",
    "Lian Li Lancool II Mesh",
    "Fractal Design Meshify 2",
    // процессоры
    "Intel Core i7-14700K OEM",
    "AMD Ryzen 5 7600X OEM",
    "Intel Core i9-14900K OEM",
    "AMD Ryzen 7 7800X3D OEM",
    "GeForce RTX 4070 Ti Super",
    "GeForce RTX 4060 Ti",
    "GeForce RTX 4090",
    "Radeon RX 7700 XT"
];

let allArrayPrice = [
    0,
    68075,
    7222,
    11199,
    23399,
    45499,
    22599,
    51499,
    54449,
    45000,
    34000,
    60000,
    34000
];

function corpCheck(string) {
    let corpCheckArray = ["Cooler Master HAF 700 Evo", "Fractal Design Define 7", "Lian Li Lancool II Mesh", "Fractal Design Meshify 2"];
    return corpCheckArray.includes(string);
}

function procCheck(string) {
    let procCheckArray = ["Intel Core i7-14700K OEM", "AMD Ryzen 5 7600X OEM", "Intel Core i9-14900K OEM", "AMD Ryzen 7 7800X3D OEM"];
    return procCheckArray.includes(string);
}

function cartsCheck(string) {
    let cartsCheckArray = ["GeForce RTX 4070 Ti Super", "GeForce RTX 4060 Ti", "GeForce RTX 4090", "Radeon RX 7700 XT"];
    return cartsCheckArray.includes(string);
}

let assemblyCorp = "";
let assemblyProc = "";
let assemblyCart = "";

let corpPrice = 0;
let procPrice = 0;
let cartPrice = 0;


function main() {
    const buttons = document.getElementsByTagName("button");

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', function() {
            if (corpCheck(allArray[this.id])) {
                corpPrice = allArrayPrice[this.id];
                assemblyCorp = allArray[this.id] + ", ";
                document.getElementById('corp').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (procCheck(allArray[this.id])) {
                procPrice = allArrayPrice[this.id];
                assemblyProc = allArray[this.id] + ", ";
                document.getElementById('proc').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (cartsCheck(allArray[this.id])) {
                cartPrice = allArrayPrice[this.id];
                console.log(cartPrice);
                assemblyCart = allArray[this.id] + ", ";
                document.getElementById('cart').innerHTML = `<img src="${allImage[this.id]}"/>`;
            }
            finalAssembly = assemblyCorp + assemblyProc + assemblyCart;
            sum = corpPrice + procPrice + cartPrice;
            document.getElementById('allComponents').innerHTML = finalAssembly;
            document.getElementById('allPrice').innerHTML = `Сумма вашей сборки - ${sum}₽`;
            console.log(assemblyCorp, assemblyProc, this.id, corpPrice, procPrice, cartPrice);
            console.log("Финальная сборка - ", finalAssembly);

        });
    });
}

let themeCheck = 0;

function themeChange() {
    const body = document.body;
    if (themeCheck % 2 === 0) {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "white";
    }
    themeCheck++;
}

main();
