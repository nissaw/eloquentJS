chessBoard2.js

var board = "";
var height = 3;
var width = 3;
for (var y = 0; y < height; y++){
  for (var x = 0; x < width; x++) {
    if ((x + y) % 2 == 0) 
      board += " ";
    else
      board += "#";
  }
  board += "\n"
};
console.log(board);