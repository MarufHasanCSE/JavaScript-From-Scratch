function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const inputString = "Hello, welcome to the world of JavaScript!";
const maxLength = 20;
const truncatedString = truncateString(inputString, maxLength);
console.log(truncatedString);