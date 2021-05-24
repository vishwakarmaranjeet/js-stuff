let arrayItems = [3, 5, 7, 9, 11];

const startForEach = performance.now();
arrayItems.forEach((item, index) => {
  console.log(`${index} --- ${item * 2}`);
});
const endForEach = performance.now();
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`);

arrayItems.map((item, index) => {
  console.log(`${index} --- ${item * 2}`);
});

// Find max value by object key
const people = [
  { name: "a", age: 20 },
  { name: "b", age: 22 },
  { name: "c", age: 30 },
];
const maxBy = (arr, key) => {
  return arr.reduce((max, obj) => {
    return max[key] >= obj[key] ? max : obj;
  }, {});
};

console.log(maxBy(people, "age"));

function maskEmailAddress(email) {
  if (email) {
    let split = email.split("@");
    let letter1 = split[0].substring(0, 0);
    let letter2 = split[0].substring(split[0].length - 3, split[0].length);
    let newFirst = letter1;
    for (let i = 0; i < split[0].length - 0; i++) {
      newFirst += "x";
    }
    newFirst += letter2;
    let letter3 = split[1].substring(0, 2);
    let extension = letter3;
    for (let i = 0; i < split[1].split(".")[0].length - 1; i++) {
      extension += "x";
    }
    //extension += "." + split[1].split(".")[1];
    let result = newFirst + "@" + extension;
    return result;
  } else {
    return "";
  }
}

let globalUserData = {};
let isUserLoggedIn = true;
function getOsInfo() {
  let OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) return (OSName = "Windows");
  if (navigator.appVersion.indexOf("Mac") != -1) return (OSName = "MacOS");
  if (navigator.appVersion.indexOf("X11") != -1) return (OSName = "UNIX");
  if (navigator.appVersion.indexOf("Linux") != -1) return (OSName = "Linux");
}
function getBrowserInfo() {
  let browserName = "Unknown Browser";
  let userAgentString = navigator.userAgent;
  if (userAgentString.indexOf("Chrome") > -1) return (browserName = "Chrome");
  if (
    userAgentString.indexOf("MSIE") > -1 ||
    userAgentString.indexOf("rv:") > -1
  )
    return (browserName = "Internet Explorer");
  if (userAgentString.indexOf("Firefox") > -1) return (browserName = "Firefox");
  if (userAgentString.indexOf("Safari") > -1) return (browserName = "Safari");
}
function getUserDeviceData() {
  let deviceData = {};
  if (typeof window !== "undefined" && typeof window !== null) {
    return (deviceData = {
      operatingSystem: getOsInfo(),
      deviceName:
        typeof window !== "undefined"
          ? window.innerWidth < 768
            ? "Mobile"
            : "Desktop"
          : null,
      screenWidth:
        typeof window !== "undefined" ? window.screen.availWidth : null,
      screenHeight:
        typeof window !== "undefined" ? window.screen.availHeight : null,
      browserInfo: getBrowserInfo(),
    });
  }
}
function setGlobalUserData(isUserLoggedIn) {
  if (
    isUserLoggedIn &&
    isUserLoggedIn !== "undefined" &&
    isUserLoggedIn != null
  ) {
    globalUserData = {
      firstName: "Test",
      lastName: "Test",
      IMNumber: Math.random() * 2,
      pageInfo: window.location.pathname,
      userDeviceData: getUserDeviceData(),
    };
  } else {
    globalUserData = {
      firstName: "",
      lastName: "",
      IMNumber: "",
      pageInfo: window.location.pathname,
      userDeviceData: getUserDeviceData(),
    };
  }
  window.globalUserData = globalUserData;
}
setGlobalUserData(isUserLoggedIn);

const tutorials = [
  {
    id: "1",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "2",
    title: "ReactJs",
    href: "https://reactjs.org/",
  },
  {
    id: "3",
    title: "VueJs",
    href: "https://vuejs.org/",
  },
  {
    id: "4",
    title: "Svelte",
    href: "https://svelte.dev/",
  },
  {
    id: "5",
    title: "Angular",
    href: "https://angular.io/",
  },
  {
    id: "6",
    title: "NodeJs",
    href: "https://nodejs.org/en/",
  },
  {
    id: "7",
    title: "Express",
    href: "http://expressjs.com/",
  },
  {
    id: "8",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    id: "9",
    title: "React Native",
    href: "https://reactnative.dev/",
  },
  {
    id: "10",
    title: "Flutter",
    href: "https://flutter.dev/",
  },
];

const printTutorials = (data) => {
  var ul = document.getElementById("tutorials");
  if (typeof data !== "undefined" && data !== null) {
    data.map((item) => {
      var li = document.createElement("li");
      li.className = "flex_item";
      var a = document.createElement("a");
      var title = document.createTextNode(item.title);
      a.append(title);
      a.href = item.href;
      var list = ul.appendChild(li);
      list.appendChild(a);
    });
  } else {
    console.log("Argument is missing");
  }
};

printTutorials(tutorials);

let name = "Amit Verma";
const getFirstName = (data) => {
  if (typeof data !== "undefined" && data !== null) {
    let userFirstName = data.split(" ")[0];
    return userFirstName;
  } else {
    console.log("error occured");
  }
};

let firstName = getFirstName(name);
console.log(firstName);

let arrList = [1, 2, 3, 4, 5];
let slicedArray = arrList.slice();

console.log(slicedArray);
