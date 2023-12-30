function vocales() {
  let cuenta = "cicciopasticcio";
  cuenta = cuenta.split("");
  console.log(cuenta);
  let contador = 0;
  for (i = 0; i < cuenta.length; i++) {
    let letra = cuenta[i];
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
let resultado = vocales("");
console.log(resultado);
