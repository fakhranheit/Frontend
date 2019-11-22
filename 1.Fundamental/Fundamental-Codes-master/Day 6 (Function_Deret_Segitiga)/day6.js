// //===========PEMBAHASAN KUIS AWAL JAM (MENAMBAH SEBUAH KATA DALAM BENTUK FUNCTION)=========================
// var kata = 'aku' // //buat variable yang berisi value kata(string)
//     function tambahkata(){ // //function untuk pengalihan
//         for(i=0;;i++){
//             if (i==100) {
//                 kata = 'uka'
//                 break
//             }
//             kata = 'akuaku' // //karena variable kata berada di luar 'if', maka variable di dalam 'if' dianggap tidak bermakna
//             return kata
//         }
//     }
//     console.log(tambahkata())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN MEMBUAT DERET ANGKA 1 - 10 DENGAN SPASI================================================
// function deret(angka){ // //buat sebuah function dengan properti, dan jenis value untuk nanti diisi di console.log
//     var z = '' // //buat variable dengan value kosong, untuk nantinya menampung hasil looping for
//     for(i=0; i<10; i++){ // //karena kita akan melooping hingga angka 10, maka pastikan i = 0, dan i lebih kecil dari 10, dan i akan terus bertambah sesuai jalannya looping (increament)
//         z+=(i+1)+' ' // //selalu tambah i dengan angka 1, agar hasil yang ditulis 1 - 10
//     }// //saat mencetak dengan keadaan i=0, yang tampil adalah angka 1 (deret pertama).Dan saat mencapai keadaan  looping terakhir (i = 9), deret akan mencetak 10 (i akhir/9 + 1).
//     return z
// }
// console.log(deret(10))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN MEMBUAT DERET ANGKA 1 - 10 DENGAN ENTER=============================================
// function deret(angka){
//     var z = ''
//     for (i=0; i<angka; i++){
//         z+=(i+1) + '\n' // //perbedaanya terletak di z, ditambahkan '\n' agarterjadi penulisan enter
//     }
//     return z
// }
// console.log(deret(10))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN MEMBUAT ANGKA KELIPATAN 3 DENGAN SPASI=============================================
// function deret(angka){
//     var z = ''
//     for(i=1; i<=angka; i++){ // //jika kondisinya kita mau memasukan value (angka) yang kita tulis ke dalam perulangan for maka gunakan '='
//         if (i%3==0){ // //karena kita ingin menampilkan angka angka yang kelipatan 3, gunakan modulus. Apabila angka tersebut dibagi 3 tidak ada hasil bagi atau 0, maka angka tersebut kelipatan 3
//             z+=(i)+ ' '
//         }   
//     }
//     return z
// }
// console.log(deret(15))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN MEMBUAT DERET TULISAN DI KELIPATAN ANGKA 3 DAN 5====================================
// function deret(angka){
//     var z = ''
//     for(i=1; i<=angka; i++){
//         if (i%3==0 && i%5==0){ // //jika angka tersebut sama sama tidak ada hasil bagi jika dibagi dengan angka 3 dan 5 (cth:15, 30, 45, 60, dst). Maka akan muncul tulisan tersebut
//             z+='MSI dan Prestige '
//         }
//         else if (i%3==0) { // //jika hanya menampilkan angka yang hasil bagi nya 0 jika dibagi dengan 3, maka akan muncul tulisan tersebut
//             z+='MSI '
//         }
//         else if (i%5==0) { // //jika hanya menampilkan angka yang hasil bagi nya 0 jika dibagi dengan 5, maka akan muncul tulisan tersebut
//             z+='Prestige '
//         }
//         else{ // // jika angka tersebut ada sisa hasil bagi jika dibagi 3 atau 5 atau keduanya. Makan yang muncul adalah angka
//             z+=(i)+ ' '
//         }
//     }
//     return z
// }
// console.log(deret(15))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN MEMBUAT PERHITUNGAN JUMLAH PENDAPATAN DI HARI KELIPATAN 2 DAN HARI KE-10==========
// var permen = function(hari){ // //buat variable yang isinya adalah sebuah function
//     var z = 0 // //mulai dengan z (return akhir) sama dengan 0 (starting value), agar tidak terjadi penjumlahan di awal
//     for(i=1; i<=hari; i++){ // //mulai dari angka 1. Karena semua angka yang membagi 0, hasil bagi nya sama dengan 0
//         if (i%10==0) { // //jika di hari kelipatan 10, maka akan mendapat tambahan 2
//             z+=2
//         }
//         else if (i%2==0) { // //gunakan else if untuk membuat looping lanjutan dari if
//             z+=1 // //jika di hari yang kelipatan 2, akan ditambah 1
//         }
//     }
//     return z
// }
// console.log(permen(10))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN MEMBUAT OPERASI PERKALIAN DAN PEMBAGIAN ANGKA DARI 1-10===========================
// function perkalian(angka){
//     var z = ''
//     for(i=1; i<=angka; i++){ // //buat i = 1, karena kita ingin membuat perkalian dari angka 1. Dan pastikan i <= dengan angka yang kita tulis, karena kita ingin menampilkan hasil kali dengan angka yang kita tulis
//         z+= angka+' x '+i+' = '+(angka*i) + '\n' // //buat susunan kalimatnya
//     }
//     return z
// }
// console.log(perkalian(10))

// function pembagian(angka) { // //contoh ke-2
//     var z = ''
//     for(i=1; i<=angka; i++){
//         z+=angka + ' / ' + i + ' = ' + (angka/i) // //karena pembagian makan angka dibagi('/') dengan i
//         z+='\n'
//     }
//     return z
// }
// console.log(pembagian(10))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

