var stringArray = ["demo1","demo2","demo3","demo4"];
//function that converts string array to uppercase
function callback(stringArray){
	var convertedString= stringArray.map(function(x){ return x.toUpperCase();})
 	return convertedString;
}

//function that returns promise
function givePromise(stringArray) {
	var delay= stringArray.length * 1000;
	//A new promise that converts string to uppercase and executes after delay
	var stringConv = new Promise(function (resolve, reject) {
		setTimeout(resolve, delay, callback(stringArray));
	});
	stringConv.then(function (data) {
	console.log(data)
	}).catch(function (err) {
	console.log(err)
	})
	return stringConv;
}
