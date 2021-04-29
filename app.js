// Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
    // Only change code below this line
   return arr.sort((a,b) =>{
      return a === b ? 0 : a < b ? -1 : 1;
   })
  
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  // Return a Sorted Array Without Changing the Original Array

  var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    var newArray = [ ]
  // Add your code below this line
  return newArray.concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);

// Split a String into an Array Using the split Method

function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    // Add your code above this line
  }
  splitify("Hello World,I-am code");

  // Combine an Array into a String Using the join Method

  function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(" ");
    // Add your code above this line
  }
  sentensify("May-the-force-be-with-you");



// Apply Functional Programming to Convert Strings to URL Slugs


  // the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"



// Use the every Method to Check that Every Element in an Array Meets a Criteria

function checkPositive(arr) {
    // Add your code below this line
  
    return arr.every(val => val > 0);
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);



  // Use the some Method to Check that Any Elements in an Array Meet a Criteria


  function checkPositive(arr) {
    return arr.some(elem => elem > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);

  // Introduction to Currying and Partial Application

  function add(x) {
    // Add your code below this line
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
    // Add your code above this line
  }
  add(10)(20)(30);
