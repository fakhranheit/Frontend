// //==========TUGAS 1 DAY 13 DECIMAL BINER======================================================================
// const decimalToBiner=(angka)=>{ // //Cara ke-1. Gunakan const agar nilai tidak berubah
//     var newarr=[] // //buat variable dengan array kosong, sebagai penampung array yang akan di push
//     do{
//         var sisa=angka%2 // //buat variable baru dengan isi operasi perhitungannya
//         newarr.push(sisa) // //nilai akan di push ke variable baru dengan array kosong
//         angka/=2 // //buat lagi perhitungan ke-2
//         angka=Math.floor(angka) // //gunakan math floor agar nilai yang idambil angka depan
//     }while(angka>0) // //akan terus berjalan jika value angka yang telah dilakukan operasi masih besar daripada 0
//     return newarr.reverse().join('') // //value nya akan di reverse dan di join menjadi string
// }
// console.log(decimalToBiner(50))

// var angka = 50 // //Cara ke-2. Tentukan nilai variable nya dahulu
// var newarr = [] // //buat variable dengan array kosong, sebagai penampung array yang akan di push
// for (var i = angka; i > 0; i = Math.floor(i/2)) {
//     var sisa = i%2
//     newarr.push(sisa)
// }
// console.log(newarr.reverse().join(''))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========TUGAS 2 DAY 13 SORTIR ANGKA DENGAN CALLBACK=====================================================
// const minMax=(arr=[], cond)=>{ // //buat variable dengan function serta parameternya. Parameter 1 berisi array, ke-2 untuk kondisi
//     arr.sort((a,b)=>a-b) // //buat metode sortir
//     if(cond=='min'){
//         return arr[0] // //jika kondisi yang ditulis 'min', maka akan meulis array ke-0 (setelah sortir)
//     }
//     else{
//         return arr[arr.length-1] // //jika kondisi yang ditulis 'max', maka akan meulis array terakhir (setelah sortir)
//     }
// }
// console.log(minMax([10,12,23,49,39,2], 'min'))
// console.log(minMax([10,12,23,49,39,2], 'max'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN PEMAHAMAN CALLBACK====================================================================
// function main(param1,param2,callBack){ // //buat function dengan parameternya (bisa lebih dari 1), serta callback
//     console.log(param1, param2) 
//     callBack()  
//   }
//   function myCallback(){ 
//     console.log ('hello callback') // //isi dari callback
//   }
//   main(1,2,myCallback) // //buat value dari function (berisi parameter dan nama function callback)

// function calculate(param1,param2,callback){ // //contoh callback operasi perhitungan
//     result = param1 + param2 // //buat operasi perhitungannya
//     if (typeof callback == 'function'){ // //buat kondisi, jika yang ditulis 'function' maka sama saja dengan callback
//      result= callback(param1,param2) // //value callback mengikut dengan parameter
//     }
//     return result
//   }
//   a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) // //tulis isi parameternya 1 dan 2, kemudia function callback beserta operasi perhitungannya
//   b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
//   console.log(a)
//   console.log(b)

// function p1() { // //contoh callback ke-3
//     console.log('p1 done') // //masing masing function memiliki value sendiri
//   }
// function p2() {
//     console.log('p2 done')
//   }
// function p3() {
//     console.log('p3 done')
//   }
// p1()
// p2()
// p3()

// function p1() { // //contoh callback ke-4
//     console.log('p1 done')
//   }
// function p2() {
//     setTimeout(
//         function() {
//           console.log('p2 done') // //membuat callback dengan jeda waktu khusu untuk funtion kedua
//         },1000
//     )
//   }
// function p3() {
//     console.log('p3 done')
//   }
// p1()
// p2() // //karena dengan adanya callback, maka belum tentu hasil yang terpanggil berurutan
// p3()

// function p1() { // //contoh callback ke-5
//     console.log('p1 done')
//     }
// function p2(callback) { // //penambahan metode callback, agar p2 tetap dipanggil terlebih dahulu
//         setTimeout(
//         function() {
//     console.log('p2 done')
//         callback()
//         },1000
//         )
//     }
// function p3() {
//     console.log('p3 done')
//     }
// p1()
// p2(p3)