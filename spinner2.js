// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 1900);

// ... fill in the rest yourself ...

let spinner = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   \n"];
const spinnerAnimation = function(takeinArray) {
  let time = 100;
  for (const item of takeinArray) {
    setTimeout(() => {
      process.stdout.write(`\r${item}`);
    }, time);
    if (time <= 1700) {
    time += 200;
    }
  }
};
spinnerAnimation(spinner);