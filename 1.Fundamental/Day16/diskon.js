const harga=(hargaAwal,diskon)=>{
    var total=0
    total+=hargaAwal-(hargaAwal*(diskon/100))
    return total
}
console.log(harga(1000,5))