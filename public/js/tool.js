// connect to socket server
const socket = io.connect("https://localhost:3000/");
// *********************************Basic Setup
//doucument=>actual html
const board = document.querySelector(".board");
//windows=> browser height and width
//canvas dimension=browser dimension
board.height = window.innerHeight; //window ki height and width lega
board.width = window.innerWidth;
// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
//pencil color
ctx.strokeStyle = "blue";
//taaki voh smooth rahe => for zoom => drawing doesn't pixelate on zoom
ctx.imageSmoothingEnabled = true;
//jab line join ho toh koi cut na aaye bich me 
ctx.lineJoin = "round";
//draw krke chodoge toh end kaise hona chahiye
ctx.lineCap = "round";
//when two linws meet there should be difference of 1px
ctx.miterLimit = 1;
ctx.imageSmoothingQuality = "high";
//width of pencil
ctx.lineWidth = 3;

// ************************Change Size**************************//
function sizeChange(value) {
  ctx.lineWidth = value;
  socket.emit("size", value);
}

// **tool Change***************************************************//
function handleLocaltoolChange(tool) {
  handleToolChange(tool);
  if (tool != "sticky");
  socket.emit("toolchange", tool);
}
// ******************handle color****************************
function handleColorChange(color) {
  ctx.strokeStyle = color;
  socket.emit("color", color);
}

const hamburger = document.querySelector(".hamburger");
const toolPanel = document.querySelector(".tool-panel");
hamburger.addEventListener("click", function() {
   handleHamburger() 

  socket.emit("hamburger");
});

