

const sentence = "hello there from lighthouse labs";
let iterate  = 0;
let speedster = 200; // changed it from 50 to 200



  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(`${char}`);
   }, iterate);
   iterate += speedster;
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, iterate);
   






