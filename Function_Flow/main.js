const createWoodBlock = () => {
    // Return an object with 4 properties.
    return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
}

const createBeautifulCarving = (woodBlock) => {
    return `The ${woodBlock.length}-inch, ${woodBlock.material} woodblock was carved into a wooden ${woodBlock.purpose}`
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock) // <-- Missing an argument. Fix it.

console.log(carvingString)