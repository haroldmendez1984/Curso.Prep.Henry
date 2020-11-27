// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]; // De esta menera arroja el primer dato o elemento del array.
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; // De esta manera podemos ubicar el ultimo elemento, cuando no sabemos el tamaño del array.
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; // Asi sabemos el tamaño del array.
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayfinal = [];

  for (var i=0 ; array.length > i ; i ++){
    
      arrayfinal[i] = array[i] + 1;
                                          }
    return arrayfinal; //se soluciona con un for y ademas un nuevo array para almacenar el incremento en uno de los elementos.
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); // se usa el metodo .push para agregar el ultimo elemento.
  return array;   
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
 array.unshift(elemento); // se tuvo encuenta la pista
 return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabrasconcat =[];
return palabrasconcat = palabras.join(' '); //el metodo join es concatenador de arrays y se usa de diversas maneras

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
return array.includes(elemento);                                         
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(var i=0 ; numeros.length > i ; i++){
      suma  = suma + numeros[i];
                                          } // se crea un variable para almacenar la suma del arreglo que se ha evaluado en un bucle
  return suma; 
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0;
  for(var i=0 ; resultadosTest.length > i ; i++){
      suma  = suma + resultadosTest[i];
                                                } 
  return suma/resultadosTest.length;             //se toma referencia el bucle de suma y de dive por la longitud del array
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor=0;
  for (var i = 0; numeros.length > i ; i++){
       
       if (numeros[i] > mayor){
           mayor = numeros[i];
                              }
                                            } // se crea una variable para almacenar el numero mayor que se evalua por un bucle
        return mayor;                                    
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  
  if(arguments.length < 1) 

    return 0;
  
  var total = 1;
  
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
                                            }
  return total;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
