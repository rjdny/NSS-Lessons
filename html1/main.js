const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}

const computerToHtml = (Computer) => {
    let htmlString = `<section id=\"computer--${Computer.id}\"\n`;
    htmlString += `   <h1>${Computer.manufacturer} ${Computer.make}</h1>\n`;
    htmlString += `   <div>Model: ${Computer.model}</div>\n`;
    htmlString += `   <div>Memory: ${Computer.specs.memory}</div>\n`;
    htmlString += `   <div>Hard drive space: ${Computer.specs.hardDrive}</div>\n`;
    htmlString += `   <div>Processor speed: ${Computer.specs.processor}</div>\n`;
    htmlString += `</section>`;
    return htmlString;
}

console.log(computerToHtml(computer))