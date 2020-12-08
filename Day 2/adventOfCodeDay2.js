const fs = require("fs")

//Read input File
const raw = fs.readFileSync('./inputDay2.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw);

let value = data.data;

function part1(){

	let total = 0;

	for(x of value){

		let c = 0;

		for(y of x.password){

			if (x.letter == y)
				c++;

		}

		if(!(c < x.low || c > x.high))
			total++;

	}

	return total;

}

console.log(part1());



function part2(){

	let total = 0;

	for(x of value){

		if(((x.password[x.low - 1] == x.letter) || (x.password[x.high - 1] == x.letter)) && x.password[x.low - 1] != x.password[x.high - 1])
			total++;

	}

	return total;


}

console.log(part2());
