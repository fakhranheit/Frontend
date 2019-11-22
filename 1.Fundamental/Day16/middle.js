const getMiddle=(kata)=>{
    var posisi
    var panjang

    if(kata.length % 2 == 1){
        posisi = kata.length/2
        panjang = 1
    }else{
        posisi = kata.length/ 2 - 1
        panjang = 2
    }
    return kata.substring(posisi,posisi+panjang)
}
console.log(getMiddle('makananatara'))
