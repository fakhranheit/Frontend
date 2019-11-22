// //==============LATIHAN MEMBUAT PENAMBAHAN ANGKA 0 UNTUK TIAP ANGKA YANG DI SPLIT DARI BENTUK STRING==========
// function latihan(num=0){ // //buat function dengan value angkanya bermula dari 0
//     var str = String(num).split('') // //buat value tersebut menjadi string kemudian di split
//     var output = ''
//     for (i = 0; i<str.length; i++) { // //looping akan berjalan hingga i lebih besar dari panjang string
//         str[i] =parseInt(str[i]) // //buat parseInt agar nilai tidak koma
//         output+=str[i]*Math.pow(10, str.length-1-i)
//         if (i<str.length-1) {
//             output+='+'
//         }
//     }
//     return output
// }
// console.log(latihan(1234))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN PEMAHAMAN ARRAY======================================================================
// function day9(a){
//     return [0,function bebas (){
//         return [1,2,3][a]
//     },3]
// }
// console.log(day9()[0])

// function jc11(a){
//     return [1,2,function(){return a}(), 4, 5][2]
// }
// console.log(jc11()[0])

// var arrnew=[1,2,3]
// var arr=[1,2,3]
// console.log(arr[2])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////