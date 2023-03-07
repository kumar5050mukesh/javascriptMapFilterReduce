// 5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// // Print a message indicating if the input matches the conditions or not.


const name = /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]*$/ig

const y = ["https://youtube.com", "htps://google.com","https:google.com"];
const z = [];
y.forEach((element) => {
  const match = element.match(name);
  console.log(match)
  if (match) {
    z.push(match[0]);
  }
});
console.log(z);
