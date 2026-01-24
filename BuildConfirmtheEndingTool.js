function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
const testString = "OpenAI creates powerful AI tools.";
const targetEnding = "tools.";
const result = confirmEnding(testString, targetEnding);
console.log(result);