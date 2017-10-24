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
