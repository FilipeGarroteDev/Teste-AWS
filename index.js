function printValues(a, b) {
  if(a > b){
    console.log(`${a} é maior que ${b}`)
  } else if (a < b){
    console.log(`${a} é menor que ${b}`)
  } else {
    console.log(`${a} é igual a ${b}`)
  }
}

printValues(150, 80);