let allImage = ["",
    "https://thg.ru/wp-content/uploads/images/howto/images/case_march_2022_01.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/case_march_2020_001.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/case_august_2020_01.jpg",
    "https://thg.ru/wp-content/uploads/images/howto/images/case_december_2020_01.jpg",
    "https://static.nix.ru/images/intel-core-i7-14700-7756672245.jpg?good_id=775667&width=500&height=500&view_id=2245",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/6c85df97c736e02dfc97d85c77d8564b/78bcf2918fdf2d1d3e02dde1e9007e03ed747f82bd81c8a595845edcdbf2582d.jpg.webp",
    "https://c.dns-shop.ru/thumb/st1/fit/500/500/6a373741b52ca823e1c13a1ba3e7c385/0b2effb5e95b28fcbd055f1414ea60e25ea1c48a2bc543d9afa5ee2d0d3c8740.jpg.webp",
    "https://c.dns-shop.ru/thumb/st4/fit/500/500/bbd34c68dedfd816f74f2e1c8982ee28/a456db21c4184e22b75ccb0c07c70c520aacaa20efed5a50da6e0c6c3d17c2d7.jpg.webp"];

let allArray = ["", "Cooler Master HAF 700 Evo", "Fractal Design Define 7", "Lian Li Lancool II Mesh",
    "Fractal Design Meshify 2",  "Intel Core i7-14700K OEM", "AMD Ryzen 5 7600X OEM", "Intel Core i9-14900K OEM", "AMD Ryzen 7 7800X3D OEM"]

function corpCheck(string) {
    let corpCheckArray = ["Cooler Master HAF 700 Evo", "Fractal Design Define 7", "Lian Li Lancool II Mesh",
        "Fractal Design Meshify 2"];
    for (let check1 = 0; check1 < corpCheckArray.length; check1++) {
        if (string === corpCheckArray[check1]) {
            return true;
        }
    }
    return false;
}

function procCheck(string) {
    let procCheckArray = ["", "Intel Core i7-14700K OEM", "AMD Ryzen 5 7600X OEM", "Intel Core i9-14900K OEM", "AMD Ryzen 7 7800X3D OEM"];
    for (let check2 = 0; check2 < procCheckArray.length; check2++) {
        if (string === procCheckArray[check2]) {
            return true;
        }
    }
    return false;
}

let assemblyCorp = "";
let assemblyProc = "";

function main() {
    const buttons = document.getElementsByTagName("button");

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', function() {
            assemblyCorp = [];
            if (corpCheck(allArray[this.id]) === true) {
                assemblyCorp = allArray[this.id] + ", ";
                document.getElementById('corp').innerHTML = `<img src="${allImage[this.id]}"/>`
            } else if (procCheck(allArray[this.id]) === true) {
                assemblyProc = allArray[this.id] + ", ";
                document.getElementById('proc').innerHTML = `<img src="${allImage[this.id]}"/>`
            }
            console.log( assemblyCorp, assemblyProc, this.id);
        });
    });
}

main();
