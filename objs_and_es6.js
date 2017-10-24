// some practice on es6 template literals in JavaScript
function colorDesc(color, adj){
  console.log(`${color} is a really ${adj} color!`);
}

colorDesc('Black', 'awesome'); // Black is a really awesome color!

// arrays
var names = ['Larry', 'Barry', 'Harry', 'Parry'];

// change the second name in `names` to Mary

console.log(names);

// Refresher on objects
var movie = {
  title: 'Back to the Future',
  rating: 9.5,
  director: 'Robert Zemeckis'
};

// change the rating of the movie to 8.5
// print out a statement about the movie USING THE OBJECT
// example:
// "Back to the Future is directed by Robert Zemeckis and has 8.5 stars"
// (use the object and interpolation here. don't just log the line above)

// function rename(arr) {
//   arr[1] = 'Mary';
//   return arr;
// }

// rename(names);
movie.rating = 8.5;
console.log(`${movie.title} is directed by ${movie.director} and has ${movie.rating} stars`);


// obj interpolation practice
var people = [
  {
    name: 'Stacey',
    age: 12,
    hobbies: ['Knitting', 'Reading', 'Laughing', 'Playing']
  },
  {
    name: 'Macey',
    age: 105,
    hobbies: ['Swimming', 'Kite flying', 'Running']
  },
  {
    name: 'Lacey',
    age: 32,
    hobbies: ['Puppies', 'Yoga']
  },
  {
    name: 'Tracey',
    age: 3,
    hobbies: []
  }
];

// loop over the people and log out everyone's name
// the logged output should be:
//   Stacey
//   Macey
//   Lacey
//   Tracey

function loopName(people) {
  for (i=0; i<people.length; i++) {
    console.log(people[i].name);
  }
}

loopName(people);

// loop over the people and print out the hobbies of each person
// the logged output should be:
//   ['Knitting', 'Reading', 'Laughing', 'Playing']
//   ['Swimming', 'Kite flying', 'Running']
//   ['Puppies', 'Yoga']
//   []

function loopHobbies(people) {
  for (i=0; i<people.length; i++) {
    console.log(people[i].hobbies);
  }
}

loopHobbies(people);

// loop over the people and print out the name, age and number of hobbies of each person
// the logged output should be:
//   Stacey is 12 years old and has 4 hobbies.
//   Macey is 105 years old and has 3 hobbies.
//   Lacey is 32 years old and has 2 hobbies.
//   Tracey is 3 years old and has 0 hobbies.

function loop(people) {
  for (i=0; i<people.length; i++) {
    console.log(`${people[i].name} is ${people[i].age} years old and has ${people[i].hobbies.length} hobbies.`);
  }
}

loop(people);


// loop through the array to find the largest element
var nums = [55, 2, 4, 1, 77, 32, 13, 99999];
var numb = [];

// change the values and length of the array to prove you have a working solution

function largestNum(arr) {

  sortedArr = arr.sort();
  let largest;

  if (sortedArr.length > 0) {
    largest = sortedArr.pop();
    console.log(`The largest number in this given array is ${largest}.`);
  } else {
    console.log('There is nothing in here.')
  }
}

largestNum(nums);
largestNum(numb);
