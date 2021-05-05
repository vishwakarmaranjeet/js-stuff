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
