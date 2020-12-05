const fs = require("fs")
//Read input File
const raw = fs.readFileSync('./Input/inputDay1.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw);

let values = data.data

function part1(){
	for (let x of values){
		for (let y of values){

				if(x + y === 2020){
					return (x*y)
				}
	}}


}

function part2 (){
	for (let x of values){
		for (let y of values){
			for (let z of values){

				if(x + y + z === 2020){
					return (x*y*z)
				}
	}}}
}

console.log(part1());

console.log(part2());
