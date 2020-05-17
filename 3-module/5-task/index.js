"use strict"
let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
function getMinMax(str) {
let el = str.split(" ");
let el1 = str.split(",");
 el =  el
			.concat(el1)
			.map( function (number){
					 return parseFloat(number)
					 })
			.filter(function (number){
						return isNaN(number) == false
							});
let min = Math.min(...el);
let max = Math.max(...el);
let result = {
	min,
	max,
}
return result;
}
console.log(getMinMax(inputData))