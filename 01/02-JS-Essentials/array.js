data = [
  {
    id: 1,
    title: "ikigai",
    author: "japan",
    genre: ["passion", "ambition", "love"],
  },
  {
    id: 2,
    title: "Revolution",
    author: "Chethan Bhagat",
    genre: ["corruption", "ambition", "love"],
  },
];
const books = [...data];
books;

let nums = [1, 2, 3, 4, 5, 6, 7];

const nums2 = nums.map((n) => n * 2);

nums2;

bookTitles = books.map((book) => book.title);
bookTitles;

requiredData = books.map((book) => {
  return {
    id: book.id,
    title: book.title,
  };
});

console.log(requiredData);

// filter method
nums;

const evenNums = nums.filter((x) => x % 2 == 0);
evenNums;

//reduce

nums;
const sum = nums.reduce((acc, x) => acc + x, 0);
sum;

// sort
let arr = [3, 2, 6, 4, 3, 7];
// arr.sort((a,b)=>(a-b));      // this modifies original array
arr;

sorted = arr;
// sorted.sort((a, b) => a - b);  // this will also modifies original array
sorted;
arr;

// take a copy of array and apply sort
sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;
