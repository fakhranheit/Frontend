var output=[]
const cekAngka=(angka)=>{
    if (angka>0){
        output.push('positif')
        
    }
    else{
        output.push('negatif')
    }

    if(angka%2==0){
        output.push('genap')
    }

    else{
        output.push('ganjil')
    }
    return output
}
console.log(cekAngka(6))