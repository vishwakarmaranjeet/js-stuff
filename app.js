// FIND THE MAX VALUE IN OBJECT BY OBJECT KEY
const people = [
  { name: 'Amit', age: 20 },
  { name: 'Sumit', age: 22 },
  { name: 'Vinit', age: 30 },
];
const maxBy = (arr, key) => {
  return arr.reduce((max, obj) => {
    return max[key] >= obj[key] ? max : obj;
  }, {});
};

console.log('MAX VALUE : ', maxBy(people, 'age'));
// FIND THE MAX VALUE IN OBJECT BY OBJECT KEY

// RENDER ARRAY OF OBJECTS
const tutorialLinks = [
  {
    id: 1,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 2,
    title: 'ReactJs',
    href: 'https://reactjs.org/',
  },
  {
    id: 3,
    title: 'VueJs',
    href: 'https://vuejs.org/',
  },
  {
    id: 4,
    title: 'Svelte',
    href: 'https://svelte.dev/',
  },
  {
    id: 5,
    title: 'Angular',
    href: 'https://angular.io/',
  },
  {
    id: 6,
    title: 'NodeJs',
    href: 'https://nodejs.org/en/',
  },
  {
    id: 7,
    title: 'Express',
    href: 'http://expressjs.com/',
  },
  {
    id: 8,
    title: 'MongoDB',
    href: 'https://www.mongodb.com/',
  },
  {
    id: 9,
    title: 'React Native',
    href: 'https://reactnative.dev/',
  },
  {
    id: 10,
    title: 'Flutter',
    href: 'https://flutter.dev/',
  },
];

const renderTutorials = (data) => {
  var ul = document.getElementById('tutorials');
  if (typeof data !== 'undefined' && data !== null) {
    data.map((item) => {
      var li = document.createElement('li');
      li.className = 'flex_item';
      var a = document.createElement('a');
      var title = document.createTextNode(item.title);
      a.append(title);
      a.href = item.href;
      var list = ul.appendChild(li);
      list.appendChild(a);
    });
  } else {
    console.log('Argument is missing');
  }
};

renderTutorials(tutorialLinks);
// RENDER ARRAY OF OBJECTS

// GET THE FIRST NAME FROM STRING
let name = 'Amit Vishwakarma';
const getFirstName = (str) => {
  if (typeof str !== 'undefined' && str !== null) {
    let firstName = str.split(' ')[0];
    return firstName;
  } else {
    console.log('Error');
  }
};

let firstName = getFirstName(name);
console.log('FIRST NAME : ', firstName);
// GET THE FIRST NAME FROM STRING

// ARRAY ITEMS FOR PERFORM CALCULATION
const arrItems = [3, 1, 2, 2];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};
const calculate = function (arr, logic) {
  const output = [];
  const arrlength = arr.length;
  for (let i = 0; i < arrlength; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};
console.log('CALCULATE AREA :', calculate(arrItems, area));
console.log('CALCULATE CIRCUMFERENCE :', calculate(arrItems, circumference));
console.log('CALCULATE DIAMETER :', calculate(arrItems, diameter));
// ARRAY ITEMS FOR PERFORM CALCULATION

// EXAMPLE OF CALL APPLY & BIND METHODS
let userDetails = {
  name: 'Amit',
  lastName: 'Vishwas',
};
let userDetails2 = {
  name: 'Rahul',
  lastName: 'Agrawal',
};
// PRINTFULLNAME FUNCTION
function printFullName(city) {
  console.log(`${this.name} ${this.lastName} from ${city}`);
}
printFullName.call(userDetails, 'Mumbai');
printFullName.apply(userDetails2, ['Delhi']);
let printName = printFullName.bind(userDetails, 'Mumbai');
printName();
// EXAMPLE OF CALL APPLY & BIND METHODS

// MAP, FILTER, REDUCE ARRAY EXAMPLE
const users = [
  { firstName: 'Amit', lastName: 'Vishwas', age: 30 },
  { firstName: 'Sumit', lastName: 'Gandhi', age: 25 },
  { firstName: 'Vinit', lastName: 'Shah', age: 32 },
  { firstName: 'Rahul', lastName: 'Sinha', age: 30 },
];

// COMBINE FIRSTNAME & LASTNAME USING MAP
const userName = users.map((x) => x.firstName + ' ' + x.lastName);
console.log('FIRST & LASTNAME :', userName);
// COMBINE FIRSTNAME & LASTNAME USING MAP

// FILTER DATA IF AGE < 25
const getAge = users.filter((x) => x.age > 25);
console.log('AGE :', getAge);
// FILTER DATA IF AGE < 25

// FILTER FIRSTNAME IF AGE IS > 25
const getAge1 = users.filter((x) => x.age > 25).map((x) => x.firstName);
console.log('FIRST NAME AGE > 25 :', getAge1);
// FILTER FIRSTNAME IF AGE IS > 25

// RETURN AGE & COUNT {30:2, 25:1, 32:1}
const getAgeWithCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(getAgeWithCount);
// RETURN AGE & COUNT {30:2, 25:1, 32:1}

// GET FIRSTNAME IF AGE > 25
const getAgeWithFirstName = users.reduce((acc, curr) => {
  if (curr.age > 25) {
    acc.push(curr.firstName);
    return acc;
  } else {
    return acc;
  }
}, []);

console.log('FIRST NAME REDUCE :', getAgeWithFirstName);
// GET FIRSTNAME IF AGE > 25
