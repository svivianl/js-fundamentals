function isEven(num){
  return num % 2 === 0;
}

var numbers = [10, 11];

numbers.forEach(num=>console.log(num + ": " + isEven(num)));
