import { fishCollection } from "../api.js";

function dofishy() {
    var html = "";
    fishCollection.forEach(theFish => {
        html += `<p>Type:${theFish.type} -- Food:${theFish.food} -- Length:${theFish.length} -- Location:${theFish.location}</p>`;
        html += "<img src=" + `\"/images/${theFish.name}.jpg\"` + ">"
        var thediv = document.getElementById("111");
        thediv.innerHTML = html;
    });
    alert("Welcome to Martin's Aquarium!!")
}
dofishy();