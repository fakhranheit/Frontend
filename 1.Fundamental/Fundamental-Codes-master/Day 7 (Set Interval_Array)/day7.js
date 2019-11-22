// //===========LATIHAN PEMBUATAN PERHITUNGAN FAKTORIAL DENGAN KELIPATAN ANGKA===============================
// function faktorial(angka) {
//     var z = angka // //variable z akan menyesuaikan dengan angka yang ditulis
//     for (i=1; i<angka; i++) { // //akan terus berjalan hingga i lebih kecil daripada angka yang ditulis
//         z*=i // //saat terus berjalan, z adalah angka hasil dari perkalian dari angka sebelumnya. Saat i bertambah, nilai z tidak diulang
//         console.log(z) // //untuk mengecek angka yang muncul
//     }
//     return z
// }
// console.log('\n' + faktorial(4))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN PPT 6 MEMBUAT TIMEOUT (MUNCUL VALUE, SAAT DETIK TERTENTU)===========================
// var x = setTimeout(alert, 1000); // //buat variable dahulu, gunakan 'setTimeout' untuk menjalankan metode. 
//                                 // // Function 1 memiliki value angka atau string. Function 2 menjaleskan waktu timeout. Waktu yang disetting dalam satuan milisecond (cth: 1000ms = 1s)
// function alert() {
//     console.log('Halo');
// }
// // clearTimeout(x) // //clearTimeout digunakan untuk menghapus pengaruh waktu. Jika diaktifikan, consol.elog dibawah metode ini tidak akan mucul
// console.log('Yuk');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN PPT 6 MEMBUAT INTERVAL WAKTU (COUNTDOWN)=============================================
// var x = setInterval(waktu, 1000); // //seperti timeout, buat variable dahulu, dan gunakan 'setInterval' untuk menjalankan metode
// var time = 10 // //tentukan angka mulai
// function waktu() {
//     console.log(time) // //agar angka muncul di console.log, letakan fungsi tersebut di dalam function
//     time-=1 // //sesuai waktu (milisecond) yang telah ditentukan, angka akan berkurang tiap kali (tergantung angka yang ditulis)
//     if (time==-1) { // // jika angka yang muncul lebih kecil dari 0, maka akan melakukan 'clearInterval'
//         clearInterval(x)
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN ELEMEN ARRAY=======================================================================
// var buah, panjangbuah, i; // //variable yang akan dimasukin
// buah = ['Bengkoang', 'Cherry', 'Apel']; // //isi var dalam bentuk array (gunakan tutup kurung siku / [])
// panjangbuah = buah.length; // //panjang isi array buah. Jika isi array ada 3, maka length = 3
// for (i = 0; i < panjangbuah; i++) { // //akan mengulang isi array sebanyak berapa jumlah dari 'panjangbuah'
    //  console.log(buah[i]); // //memanggil isi array
    //  console.log(buah.sort()); // //menyortir isi array berdasrakan alfabet (jika string) dari awal - akhir
    //  console.log(buah.reverse()); // //menyortir isi array berdasrakan urutan isi string
    //  console.log(buah.indexOf('Apel')); // //menyebutkan urutan keberapa array yang ditulis di console.log
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN POP (MENGELUARKAN) AND PUSH (MEMASUKAN) ARRAY=========================================
// var buah = ['Bengkoang', 'Cherry', 'Apel'];
// buah.pop(); // //mengeluarkan isi array urutan akhir
// console.log(buah);
// buah.push('Delima'); // //memasukan array baru di akhir. Jika tidak terjadi 'pop', maka hanya akan memasukan array baru
// console.log(buah); // //jika ada pop. Array yang terbentuk akan ditulis berdasarkan metode yang terjadi sebelumnya

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN SHIFT (MENGELUARKAN) AND UNSHIFT (MEMASUKAN) ARRAY=====================================
// var buah = ['Bengkoang', 'Cherry', 'Apel']
// buah.shift() // //mengeluarkan isi array urutan pertama
// console.log(buah)
// buah.unshift('Delima') // //memasukan array baru di awal. Jika tidak terjadi 'shift', maka hanya akan memasukan array baru
// console.log(buah) // //jika ada shift. Array yang terbentuk akan ditulis berdasarkan metode yang terjadi sebelumnya

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN SPLICE AND DELETE ARRAY==============================================================
// var buah = ['Bengkoang', 'Cherry', 'Apel']
// buah.splice(0, 1); // //menghapus array urutan ke berapa (angka pertama), menghapus berapa array setelah array yang ditulis (angka kedua)
// console.log(buah)
// buah.splice(0, 1, 'Delima', 'Jeruk'); // //memasukan string baru di urutan yang dipilih (angka pertama), mengeluarkan berapa array di array awal (angka ke 2), kemudian mengisi string baru di awal (jika ada)
// console.log(buah)
// delete buah[0]; // //menghapus sebuah array dengan keterangan di console.log
// console.log(buah)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN SLICE ARRAY==========================================================================
// var buah = ['Bengkoang', 'Cherry', 'Apel', 'Delima', 'Jeruk'] // //dengan slice, harus buat variable baru, dijalankan dengan menggunakan '.'
// var buah2 = buah.slice(2) // //menghapus berapa array dari urutan pertama
// console.log(buah2)
// var buah3 = buah.slice(1,4) // //menyisakan array yang dipilih (angka pertama), menambah berapa array yang ikut (angka kedua)
// console.log(buah3)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN MENJUMLAH DARI ARRAY=================================================================
// var arr = [1,2,3,4,5,6] // //buat array dengan angka di dalamnya
// function jumlah(arr) { // //buat function dengan mengambil variable di atas sebagai value function
//     var z = 0 // //selalu mulai dari angka 0, agar hasil jumlah tidak bertambah
//     for (i = 0; i < arr.length; i++) { // //akan berjalan terus hingga i lebih besar dari baris array
//         z+= arr[i] // //nilai z merupakan hasil operasi dari operasi sebelumnya. Akan terus bertambah hingga i lebih besar dari baris array (for selesai looping)
//     }
//     return z
// }
// console.log(jumlah([1,2,3,4,5,6]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
