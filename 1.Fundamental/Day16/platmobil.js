const ganjilgenap=(plat,tanggal)=>{
    var nomor= plat.split(' ')
    var output=''
    if(nomor[1] % 2 == 0 && tanggal % 2 == 0 ){
        output+='anda boleh lewat'
    }
    else{
        output+='anda tidak boleh lewat'
    }
    return output
}

console.log(ganjilgenap('b 13 ad',2))