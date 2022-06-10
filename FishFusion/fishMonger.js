const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = () => {
    const boatInv = boatInventory();
    let mongerInv = []
    for (let i = 0; i < boatInv.length; i++) {
        if (boatInv[i].amount >= 10 && boatInv[i].price <= 7.50) {
            boatInv[i].amount = 10;
            mongerInv.push(boatInv[i])
        }
    }
    return mongerInv
}

const fishByBudget = (monInv, budget) => {
    let budgetFish = []
    monInv.forEach(element => {
        if (element.price <= budget) {
            budgetFish.push(element);
        }
    });
    return budgetFish;
}

module.exports = { mongerInventory, fishByBudget }