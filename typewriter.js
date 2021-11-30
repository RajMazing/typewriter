const sentence = "hello there from lighthouse labs";
let iterate  = 0;
let speedster = 50;



  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(`${char}\n`);
   }, iterate);
   iterate += speedster;
  }
   



