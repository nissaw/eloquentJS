list.js

var list = {
	value: 1, 
	rest: {
		value: 2, 
		rest: {
			value: 3, 
			rest: null
		}
	}
};

{
	value: 0,
	rest: list
}

{
value: -1, 
rest: list
}

//// [ 0, 1, 2, 3]

var arrayToList = function(arr) {
	
	var list = null;
	for (var i = arr.length - 1; i >= 0; i--) {
		list = {
			'value': arr[i],
			'rest': list		
		}
		}
	
	return list;
};


var arr = [];
var listToArray = function(obj) {
	
	for( var key in obj ) {
		if (key === 'value') {
			arr.push(obj[key]);
		} else if ( key === 'rest') {
			listToArray(obj[key]);
		}
	}
	return arr;
}


