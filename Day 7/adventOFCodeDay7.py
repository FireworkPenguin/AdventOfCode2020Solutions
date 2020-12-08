f = open(".\inputDay7.txt", "r")
#print(f.read())

daRulez = {}

#Seperate All the objects
for line in f.read().split("\n"):

	fullRule = line.split(" bags contain ")
	bagType = fullRule[0];
	containedBags = fullRule[1][0:-1]

	newRules = []

	if (containedBags != "no other bags"):

		bagRules = containedBags.split(", ")

		for bag in bagRules:

			pieces = bag.split(" ")

			name = pieces[1] + ""

			for word in pieces [2: -1]:

				name = name + " " + word

			obj = (name, int(pieces[0]))

			newRules.append(obj)

	daRulez[bagType] = newRules

def findGoldBag(bagName):

	if (bagName == "shiny gold"):
		return False

	queue = [(bagName, 1)]

	while(len(queue) > 0):

		value = queue.pop();

		name = value[0];

		if (name == "shiny gold"):
			return True

		queue.extend(daRulez[name])

	return False;

def part1():

	total = 0

	for bag in daRulez:

		if(findGoldBag(bag)):
			total = total + 1

	return total

def bagTotals(bag):

	queue = daRulez[bag]

	total = 1

	for b in queue:

		total = total + (b[1] * bagTotals(b[0]))

	return total;


def part2():
	return bagTotals("shiny gold") - 1



print(part1())
print(part2())
