let five = require("johnny-five");
let board = new five.Board();

let red = 10;
let yellow = 9;
let green = 8;

board.on("ready", function(){
  let lred = new five.Led(red);
  let lyellow = new five.Led(yellow);
  let lgreen = new five.Led(green);

  lred.blink();
  lred.on(1000);
  lred.blink();
  lred.off(3000);
  lyellow.on(3000);
  lyellow.off(6000);
  lgreen.on(6000);
  lgreen.off(9000);
});


