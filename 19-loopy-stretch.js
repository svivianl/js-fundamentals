// range should be an array of 2 numbers representing the start and end values for the loop
// multiples should be an array of 2 numbers representing the multiples you want to replace with words
// words should be an array of 2 strings representing the words that will replace the multiples.
function loopy(range, multiples, words){
  if(range[0] <= range[1]){
    for(var i = range[0]; i <= range[1]; i++){

      var firstDiv = 0;
      var secondDiv = 0;

      firstDiv = i % multiples[0];
      secondDiv = i % multiples[1];

      if (firstDiv === 0 && secondDiv === 0) {
        console.log(words[0] + words[1]);
      }else if(firstDiv === 0){
        console.log(words[0]);
      }else if(secondDiv === 0){
        console.log(words[1]);
      }else{
        console.log(i);
      }
    }
  }
}

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);