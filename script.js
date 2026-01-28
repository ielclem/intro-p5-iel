let list = [];


function preload(){
    list = loadJSON("data.json");
}

function setup() {
  createCanvas(400, 600);
}
function draw() {
//   background(0);
//   fill('white');
//   circle(mouseX, mouseY, mouseX, mouseY);

//   fill(0);
  background(225);
  textAlign("center");
  textSize(30);
  text("Canada's Exports", 200, 40);

  Object.values(list).map((item, index) => {  
    fill(item.color);
    rect(50, index * 30 + 70, item.amount / 180 * 300, 10);
    fill("black");
    textSize(10);
    textAlign("left");
    text(item.name, 50, index * 30 + 65);

    textSize(20);
    textAlign("right");
    text(item.icon, 45, index * 30 + 75);
  })
}
