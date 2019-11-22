// //==============PEMBAHASAN KUIS AWAL JAM====================================================================
// var a='' // //jika string kosong, maka terdefinisikan dengan kelompok false
// if(a){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============LATIHAN SWITCH=============================================================================
// var job = 'guru' // //tentukan dahulu value dari variable
// switch (job) { // //buat switch untuk mengganti variable yang mana
// case 'guru': // //disini, job digantikan dengan guru
// console.log('Kerjaannya ngajar.') // //masukan keterangannya di console.log, jika variable menyesuaikan
// break // //gunakan break agar nilai yang muncul tidak bertambah
// case 'sopir':
// console.log('Kerjaannya nyetir.')
// break
// case 'polisi':
// console.log('Kerjaannya nilang.')
// break
// default: // //jika variable tidak sesuai dengan case di atas, maka gunakan default sebagai indikasi tidak ada variable yang sama
// console.log('Ada aja kerjaannya.')
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============SOLVE IT SWITCH PPT 4=====================================================================
// var alas = 'sandal' // // buat variable sesuai dengan keinginan
// var warna = 'biru'
// var harga = 'mahal'

// switch(true){ // //karena variable lebih dari 1, gunakan true sebagai pengganti dari isi variable yang akan di switch
//     case(alas=='sandal' && warna=='merah' && harga=='murah'):{ // //buat kondisi pertama dari 3 macam variable di atas
//         console.log('Swallow Merah') // //jika 3 kondisi di atas terpenuhi, maka console.log akan menampilkan sebuah tulisan
//         break
//     }
//     case(alas=='sepatu' && warna=='biru' && harga=='mahal'):{ // //isi variable dapat diganti sesuai dengan keinginan
//         console.log('Vans Biru')
//         break
//     }
//     case(alas=='sandal' && warna=='biru' && harga=='murah'):{
//         console.log('Swallow Biru')
//         break
//     }
//     case(alas=='sepatu' && warna=='merah' && harga=='mahal'):{
//         console.log('Vans Merah')
//         break
//     }
//     default:{ // //jika ketiga kondisi tidak bertemu, maka akan masuk ke kondisi else/default
//         console.log('Tidak tersedia')
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN DO WHILE===========================================================================
// var angka=1 // //masukan variable pertama
// while(angka<=1){ // //kondisi apabila variable lebih kecil atau sama besar sebuah angka
//     console.log(angka) // //memnuculkan angka (jika benar kondisinya)
//     angka++ // //kemudian menjumlahkan angka tersebut
//     console.log(angka)
// }

// console.log('====batas dowhile')

// var angka2=2
// do { // //jika menggunakan do, maka looping akan berjalan tanpa melihat kondisi tersebut
//     console.log(angka2)
//     angka2++
//     console.log(angka2)
// } while (angka2<=1)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////