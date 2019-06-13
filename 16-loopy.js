for(var i = 100; i <= 200; i++){

  var divBy3 = 0;
  var divBy4 = 0;

  divBy3 = i % 3;
  divBy4 = i % 4;

  if (divBy3 === 0 && divBy4 === 0) {
    console.log("Div by 3 and 4");
  }else if(divBy3 === 0){
    console.log("Div by 3");
  }else if(divBy4 === 0){
    console.log("Div by 4");
  }else{
    console.log(i);
  }
}