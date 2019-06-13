function merge(array1, array2){

  for(var i = 0; i < array2.length; i++){

    array1.push(array2[i]);

    var change = true;
    var aux, aux2;

    for(var j = 0; j < array1.length; j++){

      if(array1[j] < array2[i]){
        continue;
      }

      if(change){
        aux = array1[j];
        array1[j] = array2[i];
        change = false;
      }else{
        aux2 = array1[j];
        array1[j] = aux;
        aux = aux2;
      }
    }
  }
  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
