const sentence = "hello there from lighthouse labs\n";
let counter = 0;

for (let letter of sentence) {
  if (isNaN(letter)) {
    counter++;
  }
  setTimeout (() => {
    process.stdout.write(`${letter}`);
  }, 50 * counter);
}