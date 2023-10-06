 function ChangeBackground() {
    const images [
        "C:\Users\Super\OneDrive\Documents\pogramming\tschika 2d game\cwroot2 drawing 1.png",
    ]
    var randomBackground = Math.floor(Math.random() + images.length);
    var selectedImage = images[randomBackground];
    document.body.style.backgroundImage = "url('" + selectedImage + "')";
 };
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
canvas.onload = mainmenu()
function mainmenu {
context.beginPath();
context.rect(20, 40, 50, 50);
context.fillStyle = "rgb(255, 128, 0)"
context.fill();
context.closePath();
}
