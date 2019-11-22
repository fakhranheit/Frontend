// function faktorial(angka){
//         var faktor=angka
//         for(i=0;i<angka;i++){
//              faktor*=--angka
        
//         }
//         return faktor
//     }
// console.log(faktorial(6))

// let mobil,pjg,i
// mobil=['Xenia','Pajero','BMW','Kijang']
// pjg=mobil.length

// // console.log(mobil.sort())
// // console.log(mobil.length)
// var a=mobil.pop()
// console.log(mobil)


// rata-rata array
// function sum(arr){
//     var output=0
// for(i=0;i<arr.length;i++){
//     output+=arr[i]
//      }
//      output=output/arr.length
//        return output
//     }
// console.log(sum([1,2,3,4,5,6]))



//memisahkan string menjadi array dan dijumlahkan

function pisah(a){
var newarr = a.split('')
var output=0
for(i=0;i<newarr.length;i++){
    output+=parseInt(newarr[i])
     }
     
return output
}

console.log(pisah('9821'))

// var mobil=['avanza','innova','jazz','altis']

// function cari(arr){
//     for(i=0;i<mobil.length;i++){
//         if(mobil[i].toLowerCase() == arr.toLowerCase()){
//            return 'mobil tersedia' 
//         } 
//     }
//     return 'mobil tidak terdaftar'
// }

// console.log(cari('AvAnzA'))
// console.log(cari('avanza'))
// console.log(cari('kijang'))
// console.log(cari('Innova'))










