
loopingATriangle.js

  var line = "#";

function tower(end) {
  for (var i = 0 ; i < end; i++) {
  	console.log(line);
  	line += "#";
  }
};

tower(7);

///

for (var line = "#"; line.length < 8; line += "#")
	console.log(line);