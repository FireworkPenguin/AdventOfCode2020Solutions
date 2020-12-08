const fs = require("fs")

//Read input File
const raw = fs.readFileSync('./inputDay5.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw).data;

//Function to calculate the row
function calcRow(str){

	let value = 127;

	let index = 0;

	for (c of str){

		if(c == "F"){
			value -= 2**(6 - index)
		}

		index++
	}

	return value;

}

//Function to calculate the colunm
function calcCol(str){

	let value = 7;

	let index = 0;

	for (c of str){

		if(c == "L"){
			value -= 2**(2 - index)
		}

		index++
	}

	return value;

}

//Function to Calculate the ID
function calcID(str){

	return calcRow(str.slice(0,7)) * 8 + calcCol(str.slice(7))

}


function part1(){

	let max = 0;

	for (value of data){

		let temp = calcID(value)

		//Keep highest value
		if(temp > max){
			max = temp
		}

	}

	//Display Result
	console.log(max)

}

function part2(){

	let ids = []

	//Caculate the Ids
	for (value of data){
		ids.push(calcID(value))
	}

	//Sort so they are in order
	ids.sort();

	//Find the id: Go through each id and calculate the difference from the previous one
	for (let x = 1; x < ids.length; x++){

		//The difference will be 2
		if(ids[x] - ids[x-1] == 2){

			//Your ID is one less than the one checked
			console.log("Your ID: " + (ids[x] - 1))
		}

	}

}



part1();
part2();
