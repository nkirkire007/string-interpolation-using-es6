

// alert('string intp using es6')
cl = console.log;

// There was a boy named John who was so lazy, he couldn’t even bother to change his clothes. One day, he saw that the apple tree in their yard was full of fruits. He wanted to eat some apples but he was too lazy to climb the tree and take the fruits. So he lay down underneath the tree and waited for the fruits to fall off. John waited and waited until he was very hungry but the apples never fell.
var person= {
	name : "John",
	nature : "lazy",
	wearings : "clothes",
	day : "One day",
	tree : "apple tree",
	place : "yard",
	toEat : "fruits",
	action : "lay down underneath"
}


// var result = "There was a boy named " + name + " who was so " + nature + ", he couldn't even bother to change his " + wearings + ". " + day + ", he saw that the " + tree + " in their " + place + " was full of " + toEat + ". He wanted to eat some apples but he was too " + nature + " to climb the tree and take the " + toEat + ". So he " + action + " the tree and waited for the " + toEat + " to fall off." + name + " waited and waited until he was very hungry but the apples never fell." ;

var result = `There was a boy named ${person.name} who was so ${person.nature}, he couldn’t even bother to change his ${person.wearings}. ${person.day}, he saw that the ${person.tree} in their ${person.place} was full of ${person.toEat}. He wanted to eat some apples but he was too ${person.nature} to climb the tree and take the ${person.toEat}. So he ${person.action} the tree and waited for the ${person.toEat} to fall off. ${person.name} waited and waited until he was very hungry but the apples never fell.`

console.log(result);
document.write(result);


// Judy Ponio is a professional writer and SEO specialist. She works hard to ensure her work uses accurate facts by cross checking reputable sources. She is the lead author for several prominent websites covering a variety of topics including law, health, nutrition, and more.
var person = {
	name : "Judy Ponio",
	prof : "auther",
	known : "professinal writer",
	toDo : "works hard to ensure her work",
	specialisation : "SEO specialist",
	area : "websites",
	coverings : "law, health, nutrition, and more."
}


// var result = name + " is a " + known + " and " + specialisation + ". She " + toDo + " uses accurate facts by cross checking reputable sources. She is the lead " + prof + " for several prominent " + area + " covering a variety of topics including " + coverings + 

var result = `${person.name} is a ${person.known} and ${person.specialisation}. She ${person.toDo} uses accurate facts by cross checking reputable sources. She is the lead ${person.prof} for several prominent ${person.area} covering a variety of topics including ${person.coverings}`

console.log(result);
document.write(result);


// One day, a farmer was looking for a water source for his farm, when he bought a well from his neighbor. The neighbor, however, was cunning. The next day, as the farmer came to draw water from his well, the neighbor refused to let him take any water.
// When the farmer asked why, the neighbor replied, “I sold you the well, not the water,” and walked away. Distraught, the farmer went to the emperor to ask for justice. He explained what had happened.
// The emperor called on Birbal, one of his nine, and wisest, courtiers. Birbal proceeded to question the neighbor, Why don’t you let the farmer take water from the well? You did sell the well to the farmer?
// The neighbor replied, “Birbal, I did sell the well to the farmer but not the water within it. He has no right to draw water from the well.”
// Birbal said, “Look, since you sold the well, you have no right to keep the water in the farmer’s well. Either you pay rent to the farmer, or take it out immediately.” Realizing that his scheme had failed, the neighbor apologized and went home.
var person = {
	
	once : "One day",
	p1 : "a farmer",
	search :"a water source",
	dayAfter : "The next day,",
	p2 : "neighbor",
	king : "emperor",
	question : "Why don’t you let the farmer take water from the well?",
	answer : "“Birbal, I did sell the well to the farmer but not the water within it. He has no right to draw water from the well.”",	
}

var result = `${person.once}, ${person.p1} was looking for ${person.search} for his farm, when he bought a well from his ${person.p2}, however, was cunning. ${person.dayAfter} as the ${person.p1} came to draw water from his well, the $person.{p2} refused to let him take any water.
When the ${person.p1} asked why, the ${person.p2} replied, “I sold you the well, not the water,” and walked away. Distraught, the ${person.p1} went to the ${person.king} to ask for justice. He explained what had happened.
The ${person.king} called on Birbal, one of his nine, and wisest, courtiers. Birbal proceeded to question the neighbor, ${person.question} You did sell the well to the farmer?
The neighbor replied,${person.answer}Birbal said, “Look, since you sold the well, you have no right to keep the water in the ${person.p1} well. Either you pay rent to the ${person.p1} or take it out immediately.” Realizing that his scheme had failed, the ${person.p2} apologized and went home.`
console.log(result);
document.write(result);


// Gudhi Padwa is a spring-time festival that marks the traditional new year for Marathi and Konkani Hindus, but is also celebrated by other Hindus as well.It is celebrated in and around Maharashtra, Goa, and the union territory of Dadra and Nagar Haveli and Daman and Diu on the first day of the Chaitra month, to mark the beginning of the new year according to the lunisolar method of the Hindu calendar. Padava or paadvo comes from the Sanskrit word pratipada, which is the first day of a lunar fortnight. The spring festival is observed with colourful floor decorations called rangoli, a special Gudhi dvaja (a saree or piece of cloth garlanded with flowers, mango and neem leaves, sugar crystal garland called gathi, topped with upturned silver or copper vessels), street processions, dancing, and festive foods.
var festival = {
	fest : "Gudhi Padwa",
	duration : "spring-time festival",
	nyear : "traditional new year for Marathi and Konkani Hindus,",
	area :"It is celebrated in and around Maharashtra, Goa, and the union territory of Dadra and Nagar Haveli and Daman and Diu ",
	timing : "on the first day of the Chaitra month,",
	reason : " to mark the beginning of the new year according to the lunisolar method of the Hindu calendar.",
	known : "Padava or paadvo comes from the Sanskrit word pratipada,",
	decorations : "The spring festival is observed with colourful floor decorations called rangoli, a special Gudhi dvaja (a saree or piece of cloth garlanded 	with flowers, mango and neem leaves, sugar crystal garland called gathi, topped with upturned silver or copper vessels), street processions, dancing, and festive foods."	
}

var result = `${festival.fest} is a ${festival.duration} that marks the ${festival.nyear} but is also celebrated by other Hindus as well.${festival.area}${festival.timing}${festival.reason} ${festival.known} which is the first day of a lunar fortnight. ${festival.decorations}`
console.log(result);
document.write(result);

//Hello there I am Nitish Kirkire have completed BE in E&C from DR.BAMU Univercity, and prepared for competative exams for two to three years and later on due to some financial and personel issues want to search for job, As i have interest in computers and having some basic knowledge in it,So i am persuing web devlopment course.
var myIntro = {
	fname : "Nitish",
	lname : "Kirkire",
	degree: "BE",
	stream: "E&C",
	univercity: "DR.BAMU Univercity",
	did: "prepared for competative exams",
	interest: "computers and having some basic knowledge in it",
	persue: "persuing web devlopment course"
}
var result = `Hello there I am ${myIntro.fname} ${myIntro.lname} have completed ${myIntro.degree} in ${myIntro.stream} from ${myIntro.univercity}, and ${myIntro.did} for two to three years and later on due to some financial and personel issues want to search for job, As i have interest in ${myIntro.interest}, So i am ${myIntro.persue}.`
console.log(result);
document.write(result);