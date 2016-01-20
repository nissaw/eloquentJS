chessBoard.js

// Your code here.

var spaceHash = " #";

var hashSpace = "# ";

function chess(height, width) {

for (var i = 0; i < height; i++) {

  while(spaceHash.length < width) {spaceHash += spaceHash;};

  while(hashSpace.length < width) {hashSpace += hashSpace;};

  if (i % 2 != 0) {console.log(spaceHash);};

  if (i % 2 == 0) {console.log(hashSpace);};

}

};


chess(8, 8);
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #