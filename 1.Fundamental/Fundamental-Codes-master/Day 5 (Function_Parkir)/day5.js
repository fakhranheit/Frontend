// //===========LATIHAN 1 PPT 6 FUNCTION DENGAN STRING=============================================================
    // function a(qwerty) { // //untuk memulai, ketik function, lalu properti, dan valuenya
    //     console.log('contoh' + qwerty) // //akan menuliskan sebuah string ditambah dengan memanggil valuenya
    // }
    // a('qa') // //tulis properti nya dahulu (sesuai) di atas, kemudian valuenya
    // a('ws')
    // a('ed')
    // a('rf')
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN 2 PPT 6 FUNCTION DENGAN NUMBER UNTUK OPERASI PERHITUNGAN=================================
// var x = 10 // //tulis value variable terlebih dahulu
// var y = 50
// function contoh() { // //tulis function dengan value kosong (karena akan membuat operasi perhitungan di console log)
// }
// console.log(x+y) // //karena function tidak memiliki value, tulis console.log di luar function (jika tidak, akan terjadi infinite looping/tidak jalan)
// console.log(y/x)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 3 PPT 6 MENULISFUNCTION DENGAN PARAMETER===========================================

// function namaku(nama) { // //function dengan 1 parameter
//     console.log (nama+' Susilo');
//         }
//         namaku('Adi');
//         namaku('Budi');
//         namaku('Caca');
//         namaku('Dedi');

// function namaku(nama,usia,sex){ // //function dengan 2 parameter. Setelah menulis properti, masukan jenis jenis value yang mewakili properti tersebut
//     console.log('My name is ' + nama + ' Usiaku ' + usia + ' Saya seorang ' + sex) // //tulis tampilan console.log, serta masukan urutan jenis value
//     }
//     namaku('Idham', 20, 'Pria')// //masukan isi value setelah menulis properti function
//     namaku('Dzaky', 30, 'Pria')
//     namaku('Angel', 21, 'Wanita')
//     namaku('Lamela', 24, 'Tidak terdefinisikan')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 4 PPT 6 MENULIS RETURN FUNCTION=======================================================

// function tambahan(x,y){ // //tulis value lebih dari 1 (untuk operasi perhitungan yang menggunakan 2 value)
//         var z=x+y // //masukan operasi perhitungan dengan variable
//         return z // //kegunaan 'return' untuk mengembalikan value kepada operasi di dalam variable. Tanpa 'return', hasil tidak akan tampil
//     }// //return harus di tulis di dalam function. Jika tidak, tidak akan jalan
// console.log(tambahan(1,2))
// console.log(tambahan(3,2))
// console.log(tambahan(4,2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 5 PPT 6 MENULIS RECURSIVE FUNCTION==================================================

// function Pangkat(x,y){
//     if (y == 1) { // //buat pengecualian. Jika y (angka untuk pangkat) sama dengan 1. Maka hanya akan mengembalikan angka x
//     return x
//     }
//     else { // //jika tidak, akan membuat operasi perhitungan
//     return x=x*Pangkat(x,y-1)
//     }
// }
//     console.log(Pangkat(2,1))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=========LATIHAN 6 PPT 6 MENULIS FUNCTION DI DALAM FUNCTION=============================================
// function kalisepuluh(x) {
//     if (x < 2){ // //buat sebuah pengecualian, jika x (value dari properti function) lebih kecil dari 2, akan mereturn angka 1 di console.log
//         return 1
//     }
//     else {return (x * sepuluh()) // //jika tidak, maka berlangsung operasi perhitungan
//     }
// }
//     function sepuluh(){ // //buat function kedua. Yang isinya me-return sebuah angka untuk operasi perhitungan di atas
//     return 10;
//     }
//     console.log(kalisepuluh(1))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //==========LATIHAN MEMBUAT OPERASI PANGKAT DENGAN IF ELSE=================================================
// function pangkat(x,y) {
//     if (y==0) { // //jika y (angka untuk pangkat) sama dengan 0, maka akan mengembalikan angka x
//         return x
//     }
//     else { // //jika tidak, akan memulai operasi pangkat
//         var z=x // //buat variable z yang isinya angka dari x
//         for(i=0;i<y-1;i++){ // //jika i masih lebih kecil dari angka y dikurang 1, i akan berjalan dengan increament sampai i lebih besar daripada y dikurang 1
//             z*=x 
//         }
//         return z
//     }
// }
//     console.log(pangkat(2,3))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=========LATIHAN MEMBUAT OPERATOR PERHITUNGAN DENGAN STRING==============================================
// function operator(x,y,operator){ // //buat function serta properti dan jenis valuenya. X & Y untuk angka, 'operator' untuk nama operator perhitungannya
//     var hasil // //buat variable hasil, yang guna nya menampung operasi perhitungan
//     if(operator=='tambah'){ // //jika nanti operator isinya tambah, akan terjadi operasi pertambahan. dst.
//         hasil = x+y
//     }
//     else if(operator=='kurang'){            
//         hasil = x-y
//     }
//     else if(operator=='kali'){            
//         hasil = x*y
//     }
//     else if(operator=='bagi'){
//         hasil = x/y
//     }
//     else{ // //jika yang ditulis tidak sesuai dengan operator (termasuk besar kecil sebuah huruf), akan muncul string
//         hasil = 'Operator tidak terdefinisikan'
//     }
//     return hasil
// }
//     var hasiloperator = operator(2,3,'kali')
//     console.log(hasiloperator)
//     var hasiloperator = operator(5,5,'bagi')
//     console.log(hasiloperator)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN MENGHITUNG GAJI KARYAWAN (Posisi: Staff [2000/jam], CEO [1000/jam], Manager [700/jam])===
// function gaji(jammasuk, jamkeluar, jabatan){
//     var gaji
//     if(jabatan=='staff'){
//         gaji = 2000*(jamkeluar-jammasuk)
//     }
//     else if(jabatan=='ceo'){
//         gaji = 1000*(jamkeluar-jammasuk)
//     }
//     else if(jabatan=='manager'){
//         gaji = 700*(jamkeluar-jammasuk)
//     }
//     else{
//         gaji = 'No money money'
//     }
//     return gaji
// }
//     console.log(gaji(9, 16, 'staff'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////