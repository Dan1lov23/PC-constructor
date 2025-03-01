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
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/bbd34c68dedfd816f74f2e1c8982ee28/a456db21c4184e22b75ccb0c07c70c520aacaa20efed5a50da6e0c6c3d17c2d7.jpg.webp"
    ,
    "https://main-cdn.sbermegamarket.ru/big1/hlr-system/141/857/483/812/213/53/600015310419b0.jpeg",
    "https://tehpos.ru/image/cache/catalog/msi/msi-geforce-rtx-4060-ti-ventus-3x-e-8g-800x800.webp",
    "https://gadgets-news.ru/wp-content/uploads/2022/09/geforce-rtx-4090.jpg",
    "https://ir.ozone.ru/s3/multimedia-8/c1000/6753326156.jpg",

    "https://avatars.mds.yandex.net/get-mpic/5281727/img_id6020532221691825931.jpeg/300x300",
    "https://mygadget.ru/wp-content/uploads/2023/10/2-3.png",
    "https://mygadget.ru/wp-content/uploads/2023/10/3-1.png",
    "https://mygadget.ru/wp-content/uploads/2023/10/4-3.png",

    "https://mygadget.ru/wp-content/uploads/2024/02/3-4.jpg",
    "https://mygadget.ru/wp-content/uploads/2024/02/6-4.jpg",
    "https://mygadget.ru/wp-content/uploads/2024/02/zhestkiediski18.03.24-9.jpg",
    "https://mygadget.ru/wp-content/uploads/2024/02/zhestkiediski18.03.24-12.jpg",

    "https://c.dns-shop.ru/thumb/st4/fit/500/500/27555b218752c0217d743df0462788b5/a0c3539db6bcd6810ee35c036835771bb68f055689914a551e084a4d329be076.png.webp",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/0900bc63e68675f3ebd81fd05ff58b63/6965b294e73721abbf895a5a206ac8e915b83b1e36de6055350a7bba1940c0ed.png.webp",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/ef5eb4cc55c042ac2bd38475d9ed5cff/3c5cf998abdef6030cc75c826a41acc5ba77dcc852a67a9b1b9b37668402099d.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/9d3040c6f1141047c3e435ed4018f3ef/625d41939f718f967ea6aff7f8156ebaaca050f9fcf9d5f72b15253345316042.png.webp",

    "https://thg.ru/wp-content/uploads/images/howto/images/best_psu_may_2020_01.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/best_psu_november_2022_01.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/best_psu_march_2021_01.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/best_psu_january_2023_01.jpg",
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
    // видеокарты
    "GeForce RTX 4070 Ti Super",
    "GeForce RTX 4060 Ti",
    "GeForce RTX 4090",
    "Radeon RX 7700 XT",
    // SSD
    "AMD SATA III 120GB R5SL120G Radeon R5",
    "Kingston 240 GB",
    "Western Digital 500 GB",
    "Patriot Memory P300 512GB",
    // HDD
    "Toshiba 1 TB HDWL110UZSVA",
    "Western Digital WD5000LPLX",
    "Seagate Barracuda 1 TB",
    "Seagate Barracuda 1 TB",
    // Материнские платы
    "GIGABYTE B650E AORUS MASTER",
    "ASRock X670E Taichi",
    "ASUS ROG Strix B550-F",
    "GIGABYTE Z790 AORUS XTREME",
    // блоки питания
    "Bitfenix BF450G",
    "EVGA SuperNOVA 850 G7",
    "XPG Core Reactor 650W",
    "MSI MEG Ai1000P PCIe 5",
];

let allArrayPrice = [
    0,

    38075,
    7222,
    11199,
    23399,

    35499,
    22599,
    31499,
    34449,

    40000,
    31000,
    50000,
    34000,

    2560,
    1360,
    3000,
    5000,

    5000,
    3700,
    6000,
    4900,

    10000,
    12000,
    23400,
    15000,

    3400,
    5000,
    6400,
    16000,
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

function ssdCheck(string) {
    let ssdCheckArray = ["AMD SATA III 120GB R5SL120G Radeon R5", "Kingston 240 GB", "Western Digital 500 GB", "Patriot Memory P300 512GB"];
    return ssdCheckArray.includes(string);
}

function hddCheck(string) {
    let hddCheckArray = ["Toshiba 1 TB HDWL110UZSVA", "Western Digital WD5000LPLX", "Seagate Barracuda 1 TB", "Seagate Barracuda 1 TB"];
    return hddCheckArray.includes(string);
}

function platCheck(string) {
    let platCheckArray = ["GIGABYTE B650E AORUS MASTER", "ASRock X670E Taichi", "ASUS ROG Strix B550-F", "GIGABYTE Z790 AORUS XTREME"];
    return platCheckArray.includes(string);
}

function blockCheck(string) {
    let blockCheck = [ "Bitfenix BF450G", "EVGA SuperNOVA 850 G7", "XPG Core Reactor 650W", "MSI MEG Ai1000P PCIe 5"];
    return blockCheck.includes(string);

}

let assemblyCorp = "";
let assemblyProc = "";
let assemblyCart = "";
let assemblySSD = "";
let assemblyHDD = "";
let assemblyPlat = "";
let assemblyBlock = "";

let corpPrice = 0;
let procPrice = 0;
let cartPrice = 0;
let ssdPrice = 0;
let hddPrice = 0;
let platPrice = 0;
let blockPrice = 0;


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
                assemblyCart = allArray[this.id] + ", ";
                document.getElementById('cart').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (ssdCheck(allArray[this.id])) {
                ssdPrice = allArrayPrice[this.id];
                assemblyCart = allArray[this.id] + ", ";
                document.getElementById('ssd').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (hddCheck(allArray[this.id])) {
                hddPrice = allArrayPrice[this.id];
                assemblyCart = allArray[this.id] + ", ";
                document.getElementById('hdd').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (platCheck(allArray[this.id])) {
                platPrice = allArrayPrice[this.id];
                assemblyCart = allArray[this.id] + ", ";
                document.getElementById('plat').innerHTML = `<img src="${allImage[this.id]}"/>`;
            } else if (blockCheck(allArray[this.id])) {
                platPrice = allArrayPrice[this.id];
                assemblyBlock = allArray[this.id] + ", ";
                document.getElementById('block').innerHTML = `<img src="${allImage[this.id]}"/>`;
            }
            finalAssembly = assemblyCorp + assemblyProc + assemblyCart + assemblySSD + assemblyHDD + assemblyPlat;
            sum = corpPrice + procPrice + cartPrice + ssdPrice + hddPrice + platPrice;
            document.getElementById('allComponents').innerHTML = finalAssembly;
            document.getElementById('allPrice').innerHTML = `${sum}₽`;
            console.log(assemblyCorp, assemblyProc, corpPrice, procPrice, cartPrice, ssdPrice, hddPrice, platPrice);
            console.log("Финальная сборка - ", finalAssembly);
            money();
        });
    });
}

let themeCheck = 0;

function themeChange() {
    const body = document.body;
    const underName = document.querySelectorAll(".underName");
    if (themeCheck % 2 === 0) {
        body.style.backgroundColor = "black";
        underName.forEach(element => {
            element.style.color = "white";
        });
    } else {
        body.style.backgroundColor = "white";
        underName.forEach(element => {
            element.style.color = "#333";
        });
    }
    themeCheck++;
}

function money() {
    const youMoney = document.getElementById("youMoney").value;
    document.getElementById("allMoney").innerHTML = `${youMoney}/${sum}`;
}

main();
