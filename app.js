const customConsole = (message, color, fontSize) => {
  if (message) {
    return console.log(`%c${message}`, `color:${color}; font-size:${fontSize}`);
  }
};

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

// OBJECT VALUES / KEYS / ENTRIES EXAMPLE
let arrObj = {
  frontend: 'JavaScript',
  backend: 'Java',
};

console.log('OBJECT KEYS', Object.keys(arrObj));
console.log('OBJECT VALUES', Object.values(arrObj));
console.log('OBJECT ENTRIES', Object.entries(arrObj));
// OBJECT VALUES / KEYS / ENTRIES EXAMPLE

// FLAT ARRAY USING FLAT METHOD
let arrFlat = [1, 2, [3, [4, [5, [6]]]]];
console.log('FLAT ARRAY :', arrFlat.flat(3));
console.log('FLAT ARRAY INFINITY:', arrFlat.flat(4));
// FLAT ARRAY USING FLAT METHOD

// ARRAY SLICE METHOD
let arrSlice = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'ANGULAR'];
console.log('ARRAY SLICE :', arrSlice.slice(1, 3));

const getCouponCode = (str) => {
  let couponStr = str;
  const getCode = (str, startIndex, endIndex) => {
    let result = str.slice(startIndex, endIndex).join('');
    return result;
  };

  if (couponStr.length === 16) {
    let arrStr = couponStr.split('');
    let strOne = getCode(arrStr, 0, 4);
    let strTwo = getCode(arrStr, 4, 8);
    let strThree = getCode(arrStr, 8, 12);
    let strFour = getCode(arrStr, 12, 16);
    let couponCodeText = `${strOne} ${strTwo} ${strThree} ${strFour}`;
    customConsole(couponCodeText.toUpperCase(), 'green', '16px');
  } else {
    customConsole('Coupon Code should not more than 16 Characters');
  }
};
getCouponCode('abcdfghikolplfgh');
// ARRAY SLICE METHOD

// ARRAY SPLICE & SPLICE METHOD
// The splice() method changes the original array and slice() method doesn???t change the original array

let arrSplice = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'ANGULAR'];
let addSpliceItem = arrSplice.splice(5, 0, 'NEXTJS', 'VUE');
console.log('ADD ITEM USING SPLICE:', arrSplice);
console.log(addSpliceItem);

let arrSpliceRemove = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'ANGULAR'];
let removedSpliceItem = arrSpliceRemove.splice(4, 1);
console.log('REMOVE ITEM USING SPLICE:', arrSpliceRemove);
console.log(removedSpliceItem);

// ARRAY SPLICE METHOD

// JSON STRINGIFY
let jsonStringify = {
  name: 'Rahul',
  location: 'Mumbai',
  designation: 'Software Engineer',
};
console.log(JSON.stringify(jsonStringify));
// JSON STRINGIFY

// PROMISES & ASYNC AWAIT FUNCTIONS
const learnJavaScript = () => {
  let isLearingCompleted = true;
  return new Promise((resolve, reject) => {
    if (isLearingCompleted) {
      setTimeout(() => {
        resolve('Congratulations you have completed learing JavaScript');
      }, 2000);
    } else {
      reject('Sorry you have failed learning JavaScript ????');
    }
  });
};

const getRewards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('You will be rewarded with some surprise gift ????');
    }, 1000);
  });
};

// PROMISE EXAMPLE
learnJavaScript()
  .then((result) => {
    console.log(result);
    getRewards().then((result) => {
      console.log(result);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC AWAIT EXAMPLE
const finalResult = async () => {
  try {
    const learning = await learnJavaScript();
    const gift = await getRewards();
    customConsole(learning, 'green', '18px');
    customConsole(gift, 'green', '18px');
  } catch (error) {
    customConsole(error, 'red', '18px');
  }
};

finalResult();
// PROMISES & ASYNC AWAIT FUNCTIONS

// ARRAY & OBJECT DESCTRUCTURING
let arrDes = ['Mumbai', 'Pune', 'Banglore', 'Chennai'];
let [mumbai, pune, banglore, chennai] = arrDes;
customConsole(`ARRAY DESCTRUCTURING: ${mumbai}`);

let arrDesObj = {
  Mumbai: 'Mumbai',
  Pune: 'Pune',
  Banglore: 'Banglore',
  Chennai: 'Chennai',
};

let { mumbaicity, punecity, banglorecity, chennaicity } = arrDesObj;
customConsole(`OBJECT DESCTRUCTURING: ${mumbai}`);
// ARRAY & OBJECT DESCTRUCTURING

// HIGHER ORDER FUNCTION
const sum = (n1, n2) => {
  return n1 + n2;
};
const multiply = (n1, n2) => {
  return n1 * n2;
};

const calculatHoc = (operator, num1, num2) => {
  let total = operator(num1, num2);
  return total;
};

customConsole(calculatHoc(sum, 20, 30));
customConsole(calculatHoc(multiply, 2, 2));
// HIGHER ORDER FUNCTION

// FOREACH & MAP METHOD
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapNumber = numbers.map((num) => {
  return num * 2;
});
customConsole('MAP ITERATION', mapNumber);
let forEachNumber = numbers.forEach((num) => {
  return num * 2;
});
customConsole('FOR EACH ITERATION', forEachNumber);
// FOREACH & MAP METHOD

// FOR OF & FOR IN LOOP
// First, the for...in can loop through both Arrays and Objects while the for...of can only loop through Arrays, Map, Set, arguments object.
const forOfObj = {
  development: 'JavaScript',
  design: 'Figma',
};
for (let value in forOfObj) {
  customConsole(`FOR IN EXAMPLE, ${value}`);
}
const forInArr = [1, 2, 3, 4];
for (let value of forInArr) {
  customConsole(`FOR OF EXAMPLE, ${value}`);
}
// FOR OF & FOR IN LOOP

// REMOVING DUPLICATES ELEMEMETS FROM ARRAY
const removeDuplicateElem = [
  'JavaScript',
  'ReactJs',
  'AngularJs',
  'VueJs',
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJs',
];
// USING FILTER METHOD
let removedElem = removeDuplicateElem.filter((data, index) => {
  return removeDuplicateElem.indexOf(data) === index;
});
console.log('REMOVED DUPLICATE ELEMENT USING FILTER METHOD:', removedElem);

// USING SET METHOD
let removeEleSet = [...new Set(removeDuplicateElem)];
console.log('REMOVED DUPLICATE ELEMEMETS USING SET METHOD:', removeEleSet);

// USING FOREACH
let uniqeElem = [];
removeDuplicateElem.forEach((ele) => {
  if (!uniqeElem.includes(ele)) {
    uniqeElem.push(ele);
  }
});
console.log('REMOVED DUPLICATE ELEMEMETS USING FOREACH:', uniqeElem);
// REMOVING DUPLICATES ELEMEMETS FROM ARRAY

// SORT ARRAY ELEMEMETS
let sortArr = [4,3,2,1];
let sortedArr = sortArr.sort((a, b) => a - b);
console.log(sortedArr);

// MAP & FILTER
const isPalindrome = (str) => {
  let _str = str;
  let splitString = _str.split('').reverse().join('');
  if (_str === splitString) {
    console.log('Palindrome');
  } else { 
    console.log('Not palindrome');
  }
}
console.log(isPalindrome('civic'))

// FIND THE DUPLICATE ELEMENENT IN ARRAY & COUNTS

// SOLUTION 1 USING MAP METHOD
let counts = {};
const duplicateArr = ['a', 'b', 'c', 'a', 'b', 'b', 'c'];
duplicateArr.map((x) => { counts[x] = (counts[x] || 0) + 1 });
console.log('[TOTAL ELEMENTS IN ARRAY]:', counts);

// SOLUTION 2 USING REDUCE METHOD
let duplicateEle = duplicateArr.reduce((prev, cur) => { 
  prev[cur] = (prev[cur] || 0 ) + 1;
  return prev
}, {})

console.log(duplicateEle);

// SOLUTION 3 USING REDUCE METHOD
let duplicateEle1 = duplicateArr.reduce((prev, cur) => ({ 
  ...prev,
  [cur]:(prev[cur] || 0) + 1
}), {});

console.log(duplicateEle1);

// EXAMPLE OF RECURSIVE FUNCTION
// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.
function PrintNumbers(start, end){
  console.log(start);
    if(start < end){
        PrintNumbers((start + 1), end);
    }
}
PrintNumbers(1, 5); 

function log(num){
  if(num > 5){
      return;
  }
  console.log(num);
  log(num + 1);
}

log(1);

// EXAMPLE OF RECURSIVE FUNCTION

// EXAMPLE OF CURRYING FUNCTION
// INFINITE CURRYING 
function sumNumber(a) { 
  return function (b) { 
    if (b) return sumNumber(a + b); 
    return a;
  }
}
console.log('[SUM OF NUMBER]', sumNumber(1)(2)(3)(6)());

const userInfoCurr = {
  name: 'Ranjeet',
  location: 'Mumbai',
}

function getUserInfo(obj) { 
  return function (info) {
    return obj[info];
  }
}

let details = getUserInfo(userInfoCurr);
console.log(details('location'));
// EXAMPLE OF CURRYING FUNCTION

// MEMOISE
// Memoization is an optimization technique where expensive function calls are cached
// such that the result can be immediately returned the next time the
// function is called with the same arguments

// SCOPE & SCOPE CHAIN

// WHAT IS SCOPE
// Scope in JavaScript refers to accessbility or visibility of variables. That is which part of
// program have access to the variable or where the variable is visible

// WHY IS SCOPE IMPORTANT
// The main benefit of scope is security, That is, the variable can be accessed from only
// a certain area of the program. Using scope, we can we can avoid unintended modifications to the variables from other parts of the program.

// The scope also reduces the namespace collisions.
// That is, we can use the same variable names in different scopes.

// TYPES OF SCOPE
// There are three types of scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// GLOBAL SCOPE
var greeting = 'Global Hello World';
function greet() { 
  console.log('GLOBAL SCOPE VARIABLE:', greeting);
}
// Prints 'Hello World'
greet();

// LOCAL SCOPE OR FUNCTION SCOPE
function greet1() { 
  var greeting = 'Local Hello World';
  console.log(greeting);
}
// Print 'Hello World'
greet1();
// Uncaught ReferenceError: greeting is not defined
console.log(greeting)

// BLOCK SCOPE
{ 
  let greeting = 'Block Hello World';
  var lang = 'English';
  console.log(greeting);
}
// Prints 'English'
console.log(lang);
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);

// SCOPE CHAIN
// When a variable is used in JavaScript, the JavaScript engine will try to find the variable value in the current scope
// If it could not find the variable, it  will look into the outer scope  and will continue to do so until it finds the variable or reaches global scope.

let foo = 'foo';
function bar() {
  let baz = 'baz';
  // Prints 'baz'
  console.log(baz);
  // Prints 'foo'
  console.log(foo);
  number = 42;
  console.log(number);  // Prints 42
}
bar();

// When the function bar() is executed, the JavaScript engine looks for the baz variable and finds it in the current scope.
// Next, it looks for foo variable in the current scope and it can???t find it there, so it looks for the variable in outer scope and finds it there(i.e global scope).

// After that, we assign 42 to the number variable, so the JavaScript engine looks for the number variable in the current scope and after that in the outer scope.
// If the script is not in strict mode, the engine will create a new variable named number and assign 42 to it or return an error (if not in strict mode).

// SCOPE & SCOPE CHAIN

// COPYING OBJECTS

// const objCopy = {
//   name: 'ABC',
//   location:'Mumbai'
// }
// let objCopy2 = objCopy;
// objCopy2.name = 'DFC';

// console.log(objCopy.name);
// console.log(objCopy2.name);

const objCopy = {
  name: 'ABC',
  location:'Mumbai'
}

let objCopy2 = {...objCopy}
objCopy2.name = 'xyz';

// let objCopy2 = Object.assign({}, objCopy)
// objCopy2.name = 'xyz';

console.log(objCopy.name);
console.log(objCopy2.name);

// COPYING NESTED OBJECT
const nestedObj = {
  address: {
    phone: 1234,
  }
}
// It will replace the phone value from both the object
// let nestedObj2 = { ...nestedObj};
// nestedObj2.address.phone = 45678;

// It will not replace the value from original object
// let nestedObj2 = { address: {...nestedObj}};
// nestedObj2.address.phone = 45678;

// We can copy nested deep object using JSON.stringify
let nestedObj2 = JSON.parse(JSON.stringify(nestedObj));
nestedObj2.address.phone = 4567

// function cloneObject(obj) {
//   var clone = {};
//   for(var i in obj) {
//       if(obj[i] != null && typeof(obj[i])=="object")
//           clone[i] = cloneObject(obj[i]);
//       else
//       clone[i] = obj[i];
//   }
//   return clone;
// }

console.log(nestedObj.address.phone);
console.log(nestedObj2.address.phone);


let arrData = [1, 2, 3, 4, 5, 7, 9];

// Find large number
// function largeNum(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (sum < x[i]) {
//       sum = x[i];
//     }
//   }
//   return sum;
// }

// Total of array values
// function arrayTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// let newArrData = arrData.map((x) => x + x);
// let newArrData = arrData.filter(x => x > 2);

// Sum of array values
// let newArrData = arrData.reduce((acc, curr) => {
//   return acc + curr
// }, 0)

// Largest value in array
// let largeNumber = arrData.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// }, 0)
// console.log(newArrData)
// console.log(arrayTotal(arrData))

const languageObj = {
  language2: {
    name: 'PHP',
    age:20,
  },
  language3: {
    name: 'HTML',
    age: 30,
  }
}

res = Object.keys(languageObj).reduce((r,k) => Object.keys(languageObj[k]).reduce((o,p) => (o[p] = o[p] + languageObj[k][p] || languageObj[k][p], o), r), {});
console.log(res);