const fs = require("fs")

//Read input File
const raw = fs.readFileSync('./Input/inputDay3.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw);


 let value = data.data;

function generate(right, down){

	let index = 0;
	let total = 0;

	for(let x = down; x < value.length; x += down){

		index += right;

		if(value[x][index % 31] == "#")
			total++;

	}

	return total
}

//Part 1
console.log(generate(3,1))

//Part 2
console.log(generate(3,1)*generate(1,1)*generate(5,1)*generate(7,1)*generate(1,2))
