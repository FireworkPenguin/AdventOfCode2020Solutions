const fs = require("fs")

//Read input File
const raw = fs.readFileSync('./inputDay4.json', {encoding:'utf8', flag:'r'});
let data = JSON.parse(raw);

let value = data.data


function part1(){

	let valid = 0;

	for(x of value){

		//byr (Birth Year) - four digits; at least 1920 and at most 2002.
		if(x["byr"] == null){
			continue;
		}

		//iyr (Issue Year) - four digits; at least 2010 and at most 2020.
		if(x["iyr"] == null){
			continue;
		}

		//eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
		if(x["eyr"] == null){
			continue;
		}

		//hgt (Height) - a number followed by either cm or in:
			//If cm, the number must be at least 150 and at most 193.
			//If in, the number must be at least 59 and at most 76.
		if(x["hgt"] == null){
			continue;
		}


		//hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
		if(x["hcl"] == null){
			continue;
		}

		//ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
		if(x["ecl"] == null){
			continue;
		}


		//pid (Passport ID) - a nine-digit number, including leading zeroes.
		if(x["pid"] == null){
			continue;
		}

		valid++

	}


	return valid;

}

function part2(){

	let valid = 0;

	for(x of value){


		if(!checkYear(x["byr"], 1920, 2002)){
			continue;
		}

		if(!checkYear(x["iyr"], 2010, 2020)){
			continue
		}

		if(!checkYear(x["eyr"], 2020, 2030)){
			continue
		}


		//hgt (Height) - a number followed by either cm or in:
			//If cm, the number must be at least 150 and at most 193.
			//If in, the number must be at least 59 and at most 76.
		if(x["hgt"] == null){
			continue;
		}

		let hgtPattern = new RegExp("(^[0-9]{2}in$|^[0-9]{3}cm$)");
		let validhgt = hgtPattern.test(x["hgt"]);

		if(!validhgt){
			continue;
		}

		let tempHGTvalue = {num:x["hgt"].slice(0, x["hgt"].length - 2), unit:x["hgt"].slice(x["hgt"].length -2, x["hgt"].length) };

		if(tempHGTvalue.unit == "cm"){
			if(checkYear(tempHGTvalue.num, 150, 193)){
				continue;
			}
		} else if(tempHGTvalue.unit == "in"){
			if(checkYear(tempHGTvalue.num, 59, 76)){
			continue;
		}}

		//hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
		if(x["hcl"] == null){
			continue;
		}

		if(x["hcl"].length != 7){
			continue;
		}

		let hlcPattern = new RegExp("^#[0-9a-f]{6}");
		let validHLC = hlcPattern.test(x["hcl"]);

		if(!validHLC){
			continue;
		}



		//ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
		if(x["ecl"] == null){
			continue;
		}

		if(x["ecl"].length != 3){
			continue;
		}

		let validColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

		if(!validColor.includes(x["ecl"])){
			continue;
		}


		//pid (Passport ID) - a nine-digit number, including leading zeroes.
		if(x["pid"] == null){
			continue;
		}

		if(x["pid"].length != 9)
			continue

		let pidPattern = new RegExp("[0-9]{9}");
		let validPID = pidPattern.test(x["pid"]);

		if(!validPID){
			continue;
		}

		console.log(x["hcl"]);
		//Increment
		valid++

	}

	return valid;

}

function checkYear(value, min, max){


		//byr (Birth Year) - four digits; at least 1920 and at most 2002.
		if(value == null)
			return false;

		if(value.length != 4)
			return false;

		let tempValue = parseInt(value)


		//Check that the int value is the same as the string
		if(tempValue == null)
			return false;

		//Year Range
		if(tempValue > max || tempValue < min)
			return false;


	return true;
}




console.log(part1());
console.log(part2());
