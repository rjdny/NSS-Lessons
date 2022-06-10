const { mongerInventory, fishByBudget } = require("./fishMonger.js")

const fishMenu = (maxPrice) => {
    let menu = "";
    menu += "<h1>Menu</h1>\n";
    menu += "<article class=\"menu\">\n";

    let newMenu = []
    fishByBudget(mongerInventory(), maxPrice).forEach(element => {
        element.ammount /= 0.5;
        newMenu.push(element)
    });

    newMenu.forEach(element => {
        menu += `    <h2>${element.species}</h2>\n`;
        menu += `    <section class=\"menu__item\">${element.species} Soup</section>\n`
        menu += `    <section class=\"menu__item\">${element.species} Sandwich</section>\n`
        menu += `    <section class=\"menu__item\">Grilled ${element.species}</section>\n`
    });
    menu += "</article>\n";
    return menu;
}

module.exports = { fishMenu }

/* <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> */