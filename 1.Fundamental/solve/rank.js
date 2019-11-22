

const searching = (angka) => {

    const result = angka.filter(bebas => bebas % 2 == 0);
    return result
}

console.log(searching([6, 3, 1, 5, 4, 8]));


var bilanganDesimal = [1, 2, 3, 4, 5];

var bilanganBiner = bilanganDesimal.map((element) => {
    return element.toString();
})

console.log(bilanganBiner);

//array.map( function(element, index, array) {
   // ...
   //}, thisArgument);