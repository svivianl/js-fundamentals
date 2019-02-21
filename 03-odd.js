function isOdd(num){
  return num % 2 !== 0;
}

var numbers = [3, 8];

numbers.forEach(num=>console.log(num + " is odd: " + isOdd(num)));