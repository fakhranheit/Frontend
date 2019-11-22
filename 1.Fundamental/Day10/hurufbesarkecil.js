var hurufbesar=('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
var hurufkecil=('abcdefghijklmnopqrstuvwxyz').split('')
var huruf='BAAMBANG'
    huruf=huruf.split('')
var arraynama=[]

function besartokecil(huruf){
        

for(i=0;i<huruf.length;i++){ 
    for(j=0;j<hurufkecil.length;j++){
        if(huruf[i]==hurufbesar[j]){
            arraynama+=hurufkecil[j]
        }
    }
}
return arraynama
}
console.log(besartokecil(huruf))