/* Lecture Variables

var name = 'John';
console.log(name);
var lastName = 'Smith';
console.log(lastName);
var age = 26;
console.log(age);
var fullAge = true;
console.log(fullAge);

// Lecture Variables 2

var name = 'John';
var age = 26;
//console.log(name + age);
var job, isMarried;

//console.log(job);
job = 'teacher';
isMarried = false;
console.log(name + " is " + age + " and he is married " + isMarried);

age = 'thirty six';
job = 'driver';
console.log(name + " is a " + age + " " + job + '.');

var lastName = prompt('What is the last name?');
console.log(name + " " + lastName + " is a " + age + " year old " + job);

alert(name + " " + lastName + " is a " + age + " year old " + job);

var curYear = 2016;
var birthYear = curYear - 26;
birthYear = curYear - 26 * 2;
console.log (birthYear);


var ageJohn = 30;
var ageMark = 30;

ageJohn =  ageMark =  (3 + 5) * 4 - 6;
ageJohn ++;
console.log(ageJohn);
console.log(ageMark);

ageJohn ++;


////////////////Lecture if/else statements

var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried == 'yes'){
  console.log(name + 'is married.');
}
else{
  console.log(name + ' will hopefully marry soon.')
}

isMarried = true;

if (isMarried){
  console.log(name + ' is married.');
}
else{
  console.log(name + ' will hopefully marry soon.')
}

if(23 === "23"){
  console.log('This is true.')
}


//Lecture : boolean logic and switch

var age = 31;
if (age <= 19){
  console.log("John is a teenager");
}
else if (age <= 30)
  console.log("John is a young man");
else console.log("John is a man");

var job = prompt("What does John do?");
switch (job){
  case 'teacher':
    console.log("John teaches kids");
    break

  case 'driver':
    console.log("john drives a cab.");
    break

  case 'cop':
    console.log("John fights crime.");
    break

  default:
    console.log("john does something else.");
}


var ageJohn = 35;
var ageJohnFriend = 35;
var heightJohn = 104;
var heightJohnFriend = 105;
var scoreJohn = heightJohn + 5 * ageJohn;
var scoreJohnFriend = heightJohnFriend + 5 * ageJohnFriend;
if (scoreJohn > scoreJohnFriend)
  console.log("John wins with a score of " +scoreJohn + " to " + scoreJohnFriend);
else if (scoreJohn < scoreJohnFriend)
  console.log("John's friend wins with a score of " +scoreJohnFriend + " to " + scoreJohn);
else if (scoreJohn === scoreJohnFriend)
  console.log("The score was tied at " + scoreJohn);
else console.log("There is a scoring error");
var ageExtraPerson = 41;
var heightExtraPerson = 123;
var scoreExtraPerson = heightExtraPerson + 5 * ageExtraPerson;
if (scoreJohn >= scoreJohnFriend && scoreJohn > scoreExtraPerson)
  console.log("John Wins");
else if (scoreJohn <= scoreJohnFriend && scoreJohnFriend > scoreExtraPerson)
    console.log("John Friend Wins");
else if (scoreJohn < scoreExtraPerson && scoreJohnFriend < scoreExtraPerson)
    console.log("Extra Man Wins");
else console.log ("Scoring Error");
console.log("This is something new.");
console.log("Where will it end.");



function calculateAge(yearOfBirth){
  var curYear = 2016;
  var Age = curYear - yearOfBirth;
  return Age;
}

var howOld = calculateAge(1990);
console.log(howOld);

ageMike = calculateAge(1999);
ageMary = calculateAge(1969);
console.log("Mike is age " + ageMike + " and Mary is " + ageMary);

function yearsUntilRetirement(name, yearOfBirth){
  console.log(name);
  var age = calculateAge(yearOfBirth);
  console.log(age);
  if ((65-age)>= 0)
    console.log(name + " has " + (65-age) + " years until retirement.");
  else console.log(name + ' has already retired.');
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

var name = ['John', 'Jane', 'Mark'];
var birthYear = new Array(1990, 1969, 1948);
var john = ['John', 'Smith', 1990, 'Designer', false];

john.push('Blue');
john.unshift("Mr.");
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf('Smith'));
if(john.indexOf('Teacher') === -1){
  console.log("John is not a Teacher");
}


var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
   job: 'Teacher',
   isMarried: false
}
console.log(john);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);
john.lastName = 'Miller';
john['job']= 'Programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969
jane.job = "Is Retired";
jane.isMarried = true;
console.log(jane);



var john = {
  name: "John",
  lastName: "Smith",
  yearOfBirth: 1990,
  job: 'Teacher',
  isMarried: false,
  family:['Jane', 'Mark','Bob'],
  calculateAge: function(){
    return 2016 - this.yearOfBirth;
  }
}

var mike = {
  name: "Mike",
  lastName: "Smith",
  yearOfBirth: 1950,
  job: 'Teacher',
  isMarried: false,
  family:['Jane', 'Mark','Bob'],
  calculateAge: function(){
    this.age = 2016 - this.yearOfBirth;
  }
};
mike.calculateAge();
console.log(mike);


////Lecture Loops


var names = ['John','Jane','Mary','Mark','Bob'];
/*
for(var i = (names.length - 1); i >= 0; i--){
}

var i = 0;
while( i<names.length){
  console.log(names[i]);
  i++;
}

for(var i = 1; i<=5; i++){
  console.log(i);
  if (i === 3)
    break;
}

*/

var birthYears = [ 1965, 1972, 1991, 2005, 2016, 2015, 2000];
var ages = [];
//console.log(birthYears);
//console.log(ages);
for (var i = 0; i < birthYears.length; i++){
  ages[i] = (2017 - birthYears[i]);
  //console.log(ages);
}
 for(var i = 0; i<ages.length; i++){
  var ofAge = false;
  console.log(ages[i]);
  console.log(ofAge);
  if(ages[i] >= 18)
    ofAge = true;
  else ofAge = false;
  console.log(ages[i]+ " "+ ofAge )
}
