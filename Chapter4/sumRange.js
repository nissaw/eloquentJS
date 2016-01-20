sumRange.js


var range = function(start, end, step) {
  var rangeArray = [];
  if (start < end) {
  	for (var i = start; i <= end; i+= step){
    	if (arguments.lenth = 2) {
    		step = 1;
  }
    	rangeArray.push(i);
}
  }else if (start > end) {
    for (var i= start; i >=end; i -= step) {
      if (arguments.lenth = 2) {
        step = 1;
      }
      rangeArray.push(i);
    }
  }
  return rangeArray;
};

console.log(range(1, 10));

function sum(array) {
  var total = 0;
for (var i = 0; i < array.length; i++) {
	total += array[i];
}
	return total;
};
