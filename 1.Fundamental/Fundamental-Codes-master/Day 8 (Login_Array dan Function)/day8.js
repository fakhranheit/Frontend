// //===============LATIHAN MENGABUNGKAN SATU STRING DENGAN LAINNYA=======================================
// function joinan(a,b) { // //buat function dengan 2 jenis value
//     var z = '' // //z berisi string kosong
//     for(i=0; i<a.length; i++){ // //untuk menjalankan looping
//         if (i<a.length-1) { // //apabila i masih lebih kecil daripada jumlah baris a dikurang 1, maka akan menampilkan isi array a ditambah dengan b
//             z+=a[i]+b
//         }
//         else{ // //jika i sudah lebih besar daripada jumlah baris a, maka hanya muncul array a tanpa b
//             z+=a[i]
//         }
//     }
//     return z    
// }
// console.log(joinan(['M', 'A', 'T', 'O'], 'x'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============MEMISAHKAN HURUF DALAM STRING DAN MERUBAH ARAH NYA=========================================
// var alfabet = 'abcdefghijklmnopqrstuvwxyz' // //buat string dahulu, pastikan tidak terpisah
// alfabet = alfabet.split('').reverse() // //gunakan split untuk memisahkan antar string. Gunakan reverse untuk merubah urutan z ke a
// console.log(alfabet)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============MERUBAH NUMBER MENJADI STRING DAN MEMISAHKAN SATU PER SATU==================================
// var numbstring = 123456789 // //buat angka tanpa dipisah
// numbstring = numbstring.toString().split('') // //agar menjadi string, gunakan 'toString()'. Kemudian gunakan split untuk memisah angka tersebut
// for(i=0; i<numbstring.length; i++){ // //dengan looping for, i berguna untuk menampilkan berapa isi array
//     numbstring[i]=parseInt(numbstring[i]) // //gunakan parseInt agar tidak ada koma (memastikan)
// }
// console.log(numbstring)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============TUGAS DAY 8 #1 MEMBUAT ALGORITMA SEARCH DENGAN DATA DI ARRAY==============================
// var kata = 'hello world' // //buat variable dahulu, dan masukan value string nya
// const clonealfabet = function (a='',b){ // //gunakan const agar hasil absolut. Buat jenis value function a dengan string kosong
//     if (b.length==1){ // //looping akan jalan jika string b hanya ada 1
//         for (i=0; i<a.length; i++){ // //melakukan looping berdasarkan banyaknya length di string a
//             if (b==a[i]) { // //jika 1 huruf di b, terdapat di kalimat/kata a, maka 'true'
//                 return true
//             }
//         }
//         return false // //jika tidak maka false
//     }
//     else{// //jika huruf di b lebih dari 2
//         for(i=0; i<a.length; i++){
//             if (b==a.substr(i,b.length)) { // //gunakan metode substract ('subtr'), untuk melacak string isi dari string a. Apakah ada string yang sama atau tidak.
//                 return true // //jika ada hasilnya true
//             }
//         }
//         return false // //jika tidak maka false
//     }
// }
// console.log(clonealfabet('hello world','llo'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============TUGAS DAY 8 #2 MEMBUAT TANGGAL DENGAN FUNCTION DAN ARRAY====================================
// function tanggal(){ // //buat function dengan value kosong
//     var x=new Date() // //variable x merupakan sebuah tanggal baru (gunakan new Date())
//     var hari = ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumaat', 'Sabtu']  // //isi array hari
//     var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'October', 'November', 'Desember'] // //isi array bulan
//     var output = ('Hari ini: ' + hari[x.getDay()] + '\nTanggal: ' + [x.getDate()] + '\nBulan: ' + bulan[x.getMonth()] + '\nTahun: ' + x.getFullYear())    
//     // //masukan variable (hari/bulan), kemudian buat array dengan x yang menggunakan metode seperti; .getDay(), .getDate(), .getMonth(), dan .getFullYear()
//     return output
// }
// console.log(tanggal('')) // //jangan isi value di console.log

//////////////////////////////////////////////////////////////////////////////////////////////////////////////