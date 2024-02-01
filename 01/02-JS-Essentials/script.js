console.log("sathish");
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

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id == id);
}

// Destructuring objects

books = getBooks();
// books;

book = getBook(2);
book;

const { title, genre } = book;

title;
genre;

// Destructuring Arrays

values = [1, 2, 11, 12];

const [val1, val2] = values;

val1;

val2;

// Rest Operator
const [v1, v2, ...others] = values;
others;

newBook = {
  ...book,
  //new Properties
  pages: 100,
  rating: 4,

  //overwriting existing properties
  author: "Sathish",
};

newBook;
//Spread Operator

const nums = [...values, 13, 14];
nums;

// ?? operator

const num1 = 0 || 3;
num1;
const num2 = 0 ?? 3;
num2;

// Optional chaining
book1 = {
  ...book,
  reviews: ["good", "bad", "ok"],
};
book2 = {
  ...book,
};
const totalReviews = book1.reviews.length + (book2.totalReviews?.length ?? 0);

totalReviews;

obj1 = {
  val: 100,
};

objvals = obj1.val + (obj2?.val ?? 0);

objvals;
