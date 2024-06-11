// Canvas
// canvas setup
var cnv = document.getElementById("canva");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

//  Variables
circleX1 = 135;
circleY1 = 118;
circleX2 = 270;
circleY2 = 145;
circleX3 = 157;
circleY3 = 255;

skyR = 173;
skyG = 216;
skyB = 230;


squarex1 = 90;
squarey1 = 73;
squarex2 = 225;
squarey2 = 100;
squarex3 = 115;
squarey3 = 210;

requestAnimationFrame(draw);

function draw() {
  // The sky
  ctx.fillStyle = `(${skyR}, ${skyG}, ${skyB})`;
  ctx.fillRect(0, 0, 500, 500);
 
 
  
  // Frame
  ctx.fillStyle = "mediumPurple";
  ctx.beginPath();
  ctx.arc(210, 175, 160, 0, 2 * Math.PI);
  ctx.fill();

  // Square #1
  ctx.fillStyle = "pink";
  ctx.fillRect(squarex1, squarey1, 90, 90);

  // Square #2
  ctx.fillStyle = "LightGoldenRodYellow";
  ctx.fillRect(squarex2, squarey2, 90, 90);

  // Square #3
  ctx.fillStyle = "PaleTurquoise";
  ctx.fillRect(squarex3, squarey3, 90, 90);

  // Circle #1
  ctx.fillStyle = "PaleTurquoise";
  ctx.beginPath();
  ctx.arc(circleX1, circleY1, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Circle #2

  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(circleX2, circleY2, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Circle #3

  ctx.fillStyle = "LightGoldenRodYellow";
  ctx.beginPath();
  ctx.arc(circleX3, circleY3, 25, 0, 2 * Math.PI);
  ctx.fill();

  // Pot #1
  ctx.fillStyle = "SaddleBrown";
  ctx.fillRect(0, 380, 130, 500);

  // Pot #2
  ctx.fillStyle = "SaddleBrown";
  ctx.fillRect(370, 380, 500, 500);

  // Plant #1
  ctx.fillStyle = "OliveDrab";
  ctx.fillRect(20, 300, 80, 80);

  // Plant #2
  ctx.fillStyle = "OliveDrab";
  ctx.fillRect(400, 300, 80, 80);

  //  Butterfly Image
  var butter = document.getElementById("butter");
  ctx.drawImage(butter, 360, 0, 139, 100);

  // Text
  ctx.fillStyle = "black";
  ctx.font = "25px Brush Script MT";
  ctx.fillText("Art by A.M", 0, 25);

  // Animation
  // #1
  circleX1 = circleX1 + 1;

  if (circleX1 >= 335) {
    circleX1--;
  }

  if (circleY1 <= 236) {
    circleY1++;
  }

  circleX2 = circleX2 + 1;

  if (circleX2 >= 345) {
    circleX2--;
  }

  if (circleY2 <= 10) {
    circleY2--;
  }

  circleX3 = circleX3 + 1;

  if (circleX3 >= 300) {
    circleX3--;
  }

  if (circleY3 >= 75) {
    circleY3--;
  }

  // #2

  if(squarex1 <= 90) {
    squarex1++;
  } 
  if(squarey1 <= 118) {
    squarey1--;
  }

  // squarex2 = squarex2 + 1;
  if (squarex2 <= 410) {
    squarex2++;
  }
 if(squarey2 <= 400 ) {
  squarey2++;
 }

//  squarex3 = squarex3 + 1;
 if(squarex3 >= 0) {
  squarex3--;
 }


 if(squarey3 <= 300) {
  squarey2--;
 }



// #3

 //  Blue Sky Color: rgb(173, 216, 230)
  // night Color: rgb(255, 299, 180 )

  if (skyR < 255) {
    skyR++;
  }
  if (skyG <299 ) {
    skyG++;
  }

  if (skyB < 139) {
    skyB++;
  }



  requestAnimationFrame(draw);
}


