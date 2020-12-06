const fs = require("fs")

//Read input File
const raw = fs.readFileSync('./Input/inputDay6.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw).data;

function getNumUniqueChar(strArr){
	
	let recordLetters = [];
	let count = 0
	
	for (str of strArr){
		for (c of str){
			if(!recordLetters.includes(c)){		
				count++
				recordLetters.push(c);				
			}
		}
	}
	
	return count;
	
}

function getCountOfCharInAll(strArr){
	
	let recordLetters = [];
	let count = 0
	
	
	for (letter of "abcdefghijklmnopqrstuvwxyz"){
		
		let containedInAll = true;
	
		for (str of strArr){
			
			if (!str.includes(letter)){
				containedInAll = false;
				
			}
		}
		
		if(containedInAll){
			count++
		}
		
	}
	
	return count;
	
}




function part1(){

	let total = 0;
	
	for (value of data){
		
		total += getNumUniqueChar(value)
		
	}


	console.log(total)

}

function part2(){
	
	let total = 0;
	
	for (value of data){
		
		total += getCountOfCharInAll(value)
		
	}


	console.log(total)



}

part1();
part2();
