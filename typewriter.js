const sentence = "hello there from lighthouse labs"
const typewriter = function (string){

let timeDelay = 0;
// string = string.concat('\n')
  for (const char of string) {
    timeDelay += 50
    timeoutID = setTimeout(() => {
      process.stdout.write(char)
    }, timeDelay, char)
    }
  };
    
  
typewriter(sentence);