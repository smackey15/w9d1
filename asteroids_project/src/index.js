const MovingObject = require("./moving_object.js");


document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;
    
    const ctx = canvasEl.getContext("2d"); 
    window.ctx = ctx;
});

window.MovingObject = MovingObject;   
