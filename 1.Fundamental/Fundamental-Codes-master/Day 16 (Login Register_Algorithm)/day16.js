// //==============LATIHAN PENJUMLAHAN DENGAN ALFABET============================================================
// const vokalkonsonan = (kata) =>{ // //buat variable dengan function serta jenis valuenya
//     var alfabet = 'abcdefghijklmnopqrstuvwxyz'.split('') // //buat variable dengan value lengkap serta dibuat split
//     var output = 0 // //karena ingin menampilkan hasil akhir dalam bentuk angka. Buat variable output (akhir) denga isi 0
//     for(i=0; i<kata.length; i++){ // //buat sebuah kondisi perulangan
//         if(kata[i] == 'a' || kata[i] == 'i' || kata[i] == 'u' || kata[i] == 'e' || kata[i] == 'o'){ // //buat sebuah kondisi, jika output yang ditulis merupakan salah satu dari alfabet tersebut
//             output ++ // //jika yang ditulis merupakan salah satu dari alfabet tersebut, maka tambah 1
//         }
//         else{ // //buat sebuah kondisi ke-2, jika yang ditulis bukan merupakan alfabet dari kondisi 1
//             var urutan = alfabet.indexOf(kata[i])+1 // //gunakan metode indexof untuk mencari salah satu dari isi value array. Gunakan +1 agar jika yang dipilih alfabet pertama, hasilnya tidak 0(mengacu kepada urutan array)
//             output += urutan
//         }
//     }
//     return output
// }
// console.log(vokalkonsonan('aja'))
// console.log(vokalkonsonan('zaza'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //================LATIHAN REPLACE==========================================================================
// function getdomain(input){
//     var newinput = input.replace('http://', '').replace('www', '').replace('.com', '').split('/') // //dengan replace kita dapat mengganti sebuah string tertentu, hingga menjadi string baru
//     return newinput // //buat variable baru sebagai hasil dari metode.
// }
// console.log(getdomain('http://github.com/carbonfive/raygun'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN MENGAMBIL ISI STRING MEDIAN=========================================================
// function getMiddle(str){
//      var median = '' // //buat variable dengan isi string kosong
//      if (str.length % 2 !== 0){ // //buat kondisi jika string tersebut berjumlah ganjil
//         median = str[Math.floor(str.length / 2)] // //maka string yang diambil adalah alfabet yang di tengah (ditentukan oleh jumlah length tersebut)
//      }
//      else{ // //jika genap, maka akan mengambil 2 isi string di tengah
//          const mid1 = str[(str.length/2) - 1] // //string pertama (median kiri)
//          const mid2 = str[str.length/2] // //string pertama (median kanan)
//         median = mid1+mid2 // //jumlah nya ditambah (value nya dimunculkan bersamaan, bukan dijumlah)
//     }
//     return median
// }
// console.log(getMiddle('test'))
// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))
// console.log(getMiddle('A'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN MENENTUKAN RETURN BERDASARKAN STRING DAN NUMBER (PLAT MOBIL)========================
// const ganjilgenap = (plat,tanggal)=>{ // //buat sebuah function dengan 2 parameter
//     var platsplit = plat.split(' ') // //buat variable baru untuk mengoperasikan sebuah method kepada parameter 1
//     console.log(platsplit) // //gunakan spasi antar 2 tick. Agar value yang di split bukan terhadap semua isi value (satu per satu)
//     if (platsplit[1]%2!==0 && tanggal%2==0 || platsplit[1]%2==0 && tanggal%2!==0){ // //panggil hasil split dengan urutan dalam array nya, serta buat 2 kondisi
//         return ('Jangan lewat') // // Dan jika angka plat tersebut ganjil dan tanggal genap atau sebaliknya. Maka tidak boleh lewat
//     }
//     else if(platsplit[1]%2==0 && tanggal%2==0 || platsplit[1]%2!==0 && tanggal%2!==0){
//         return ('Silahkan lewat')  // // jika angka plat tersebut ganjil dan tanggal ganjil atau sebaliknya. Maka boleh lewat
//     }
// }
// console.log(ganjilgenap('AB 2014 UUW', 23))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //================LATIHAN MENCARI HARGA AKHIR SETELAH DISKON================================================
// const diskon=(hargaasli,discount)=>{ // //buat sebuah function dengan 2 parameter
//     var besapotongan = hargaasli*(discount/100) // //buat variable baru yang mencari harga potongan
//     var hargakahir = hargaasli - besapotongan // //buat variable baru yang mencari harga akhir
//     return hargakahir
// }
// console.log(diskon(10000,20))
// console.log(diskon(500000,50))

