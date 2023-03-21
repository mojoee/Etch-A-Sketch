let length = 16;
let width = 16;

let gridSize = 16;
const container = document.createElement("div");
for (let i=0; i<gridSize; i++){
    for (let j=0; j<gridSize; j++){
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}
// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("button1");
document.body.insertBefore(container, currentDiv);
console.log("Hello")
