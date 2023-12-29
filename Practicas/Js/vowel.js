function getCount(str) {
  let arrayStr = str.split("");
  console.log(arrayStr);
  let contador = 0;
  for (let i = 0; i < arrayStr.length; i++) {
    let letra = arrayStr[i];
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }
  return contador;
}

let resultado = getCount("");
console.log(resultado);

//   let texto='aeiou'

//   texto= texto.split("")
//   let contador=0

//   for (let i=0; i<texto.length; i++){
//     let letra=texto[i]
//     if (letra==='a' || letra=== 'e'|| letra==='i'|| letra==='o'|| letra==='u' ){
//     contador++

//     }
//     console.log(letra)

//   }
//   console.log("el resultado es", contador)
