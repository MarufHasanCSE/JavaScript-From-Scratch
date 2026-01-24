function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const asteriskCount = username.length - 2;
  
  const maskedUsername = firstChar + "*".repeat(asteriskCount) + lastChar;
  
  return maskedUsername + domain;
}

const email = "myEmail@email.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));      
console.log(maskEmail("freecodecamp@example.com"));   
console.log(maskEmail("info@test.dev"));              
console.log(maskEmail("user@domain.org"));            