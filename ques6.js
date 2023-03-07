
const name = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/ig


const y = ["https://youtube.com", "https://www.linkedin.com/company/profiles/","https:google.com"];
const z = [];
y.forEach((element) => {
  const match = element.match(name);
  console.log(match)
  if (match) {
    z.push(match[0]);
  }
});
console.log(z);