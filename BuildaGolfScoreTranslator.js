const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
    return "Hole-in-one!";
  }
  
    if (strokes <= par - 2) {
    return "Eagle";
  }
  
    if (strokes === par - 1) {
    return "Birdie";
  }
  
  
  if (strokes === par) {
    return "Par";
  }
  
    if (strokes === par + 1) {
    return "Bogey";
  }
  
    if (strokes === par + 2) {
    return "Double Bogey";
  }
  
    if (strokes >= par + 3) {
    return "Go Home!";
  }
}

console.log(golfScore(5, 4)); // Output: "Birdie"
console.log(golfScore(4, 1)); // Output: "Hole-in-one!"
console.log(golfScore(4, 4)); // Output: "Par"
console.log(golfScore(5, 7)); // Output: "Double Bogey"
console.log(golfScore(2, 5)); // Output: "Go Home!"
console.log(golfScore(3, 2)); // Output: "Birdie"
console.log(golfScore(4, 6)); // Output: "Bogey"
console.log(golfScore(5, 3)); // Output: "Eagle"
console.log(golfScore(4, 8)); // Output: "Go Home!"
