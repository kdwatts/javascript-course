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
*/

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
