let lunches = [];

function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomLunch = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    const menuItems = arr.join(", ");
    console.log(`Menu items: ${menuItems}`);
  }
}
console.log("Welcome to the Lunch Picker Program!");

lunches = addLunchToEnd(lunches, "Chicken Salad");
lunches = addLunchToEnd(lunches, "Veggie Wrap");
lunches = addLunchToStart(lunches, "Turkey Sandwich");
showLunchMenu(lunches);

getRandomLunch(lunches);

lunches = removeLastLunch(lunches);
showLunchMenu(lunches);

lunches = removeFirstLunch(lunches);
showLunchMenu(lunches);

console.log("Thank you for using the Lunch Picker Program!");