const decimalToBoner=(angka)=>{
    var newarr=[]
    do{
        var sisa=angka%2
        newarr.push(sisa)
        angka/=2
        angka=Math.floor(angka)
    }while(angka>0)
    return newarr.reverse().join('')
}
console.log(decimalToBoner(50))

var newarr=[]
var angka=50
for(var i=angka;i>0;i=Math.floor(i/2)){
    var sisa=i%2
    newarr.push(sisa)
}
console.log(newarr.reverse().join(''))