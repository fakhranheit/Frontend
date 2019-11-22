var hurufbesar=('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
var hurufkecil=('abcdefghijklmnopqrstuvwxyz').split('')
// var huruf='bang'.split('')
var arraynama=[]

function besartokecil(huruf){
        
for(i=0;i<huruf.length;i++){
    for(j=0;j<hurufkecil.length;j++){
        if(huruf[i]==hurufkecil[j]){ 
            arraynama+=hurufbesar[j]
        }
    }
}
return arraynama
}
console.log(besartokecil('fak'.split('')))