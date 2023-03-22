let totalHeight = 960;
let totalWidth = 960;
let numberOfSquares =prompt("How many squares should the board have?");
let height = totalHeight/numberOfSquares;
let width = totalWidth/numberOfSquares;

function red(element){
    alert("WOrks");
    element.style.background = "blue";

}

let gridSize = 16;
const currentDiv = document.getElementById("button1");
for (let i=0; i<gridSize; i++){

    //   display: flex;
    const container = document.createElement("div");
    container.style["display"] = 'flex'
    for (let j=0; j<gridSize; j++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("style",`width:${width}px; height:${height}px`);
        // newDiv.setAttribute("style",);
        // newDiv.style.border = '1px solid black';

        // newDiv.style["position"] = 'relative'
        // newDiv.style["top"] = '-5px'
        newDiv.addEventListener(
            "mouseover",
            (event) => {
              // highlight the mouseover target
              event.target.style.color = "orange";
              // alert("WOrks");
              event.target.style.background = "blue";
              // reset the color after a short delay
              setTimeout(() => {
                event.target.style.color = "";
                // event.target.style.background = "";
              }, 500);
            },
            false
          );

        container.appendChild(newDiv);
    }
    document.body.insertBefore(container, currentDiv);


}
// add the newly created element and its content into the DOM

console.log("Hello")
