// //==============LATIHAN MEMODIFIKASI ISI VARIABLE=============================================================
// var x = 'halo'
// var y = 'DUNIA'
// var z = 12345

// console.log(x.toUpperCase()) // //merubah isi variable menjadi huruf besar (khusus string)
// console.log(y.toLowerCase()) // //merubah isi variable menjadi huruf kecil (khusus string)
// console.log(x.replace('ha' , 'mi')) // //merubah isi string sebagian (sebelum koma), dengan isi baru (sesudah koma)
// console.log(x.replace(/ha/g, 'mi')) // //cara lain merubah isi string sebagian (sebelum koma), dengan isi baru (sesudah koma)
// console.log(z.toString()) // // mengubah value variable menjadi string
// console.log(typeof(z.toString())) // //memberi definisi value variable

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN OPERASI ARITMATIKA=====================================================================

// var usiaAndi = 40
// var usiaBudi = 20

// console.log(usiaAndi * usiaBudi) // //operasi perkalian 2 variable
// console.log(usiaAndi / usiaBudi) // //operasi pembagian 2 variable
// console.log(usiaAndi + usiaBudi) // //operasi penjumlahan 2 variable
// console.log(usiaAndi - usiaBudi) // //operasi pengurangan 2 variable
// console.log(usiaAndi % usiaBudi) // //operasi modulus (hasil sisa bagi) 2 variable

// usiaAndi++ // //menambah value sebuah variable dengan angka 1
// console.log(usiaAndi)
// usiaBudi-- // //mengurangi value sebuah variable dengan angka 1
// console.log(usiaBudi)

// usiaAndi+=2 // //menambah value sesuai keinginan kita
// console.log(usiaAndi)
// usiaBudi-=5 // //mengurangi value sesuai keinginan kita
// console.log(usiaBudi)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN OBJEK MATEMATIKA=====================================================================
// console.log(Math.PI) // //menampilkan nilai pi (3.14)
// console.log(Math.abs(-5)) // //membuat value menjadi positif
// console.log(Math.pow(8, 2)) // //melakukan operasi perpangkatan. Angka pertama sebagai angka dasar, angka kedua sebagai angka pangkat
// console.log(Math.sqrt(64)) // //melakukan operasi akar pangkat 2
// console.log(Math.cbrt(8)) // //melakukan operasi akar pangkat 3

// console.log(Math.round(4.7)) // //membulatkan angka (Jika lebih besar dari 5, maka akan menjadi nilai teratasnya)
// console.log(Math.round(4.4)) // //membulatkan angka (Jika lebih kecil dari 5, maka akan menjadi nilai teratasnya)
// console.log(Math.floor(7.11)) // //menampilkan hanya angka pertama
// console.log(Math.ceil(4.1)) // //menampilkan angka 1 lebih bedar dari angka pertama

// console.log(Math.max(1,3,5)) // //menampilkan angka terbesar dari value sebuah variable
// console.log(Math.min(1,3,5)) // //menampilkan angka terkecil dari value sebuah variable

// console.log(Math.random()) // //menampilkan angka secara acak
// var a = (Math.random()*100) // //agar membuat nilai acak tersebut dengan angka diatas 0, kalikan 100
// console.log(Math.floor(a)) // //kemudian gunakan Math.floor untuk membulatkan angka tersebut tanpa koma

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN MENAMPILKAN TANGGAL (MENYESUAIKAN SISTEM KOMPUTER)====================================
// let a = new Date()
// console.log(a.getFullYear()) // //mengambil tahun
// console.log(a.getMonth()) // //mengambil bulan
// console.log(a.getDate()) // //mengambil tanggal
// console.log(a.getDay()) // //mengambil nama hari
// console.log(a.getHours()) // //mengambil angka jam
// console.log(a.getMinutes()) // //mengambil angka menit
// console.log(a.getSeconds()) // //mengambil angka detik
// console.log(a.getMilliseconds()) // //mengambil angkat milisecond (1000ms = 1s)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============SOLVE IT 1 PPT 2=============================================================================
// var x = 4
// var y = 3
// var z = 2
// var total = Math.pow((x+y*z)/(x*y), z)
// console.log(total)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============SOLVE IT 4 PPT 2==============================================================================
// var a = 485
// var b = 360
// var c = 30
// var tahun = Math.floor(a/b) // //untuk mengambil hasil berapa tahun (1 tahun = 360 hari)
// console.log(tahun)
// var x = a%b // //karena jumlah hari lebih dari 1 tahun, maka ada sisa bulan. Cari sisa bulan dengan modulus
// var bulan = Math.floor(x/c) // //karena 1 bulan = 30 hari. Maka bagi sisa bagi var di atas dengan 30
// console.log(bulan)
// var y = a%c // //karena jumlah hari lebih dari 1 tahun, maka ada sisa hari. Cari sisa hari dengan modulus
// var hari = Math.floor(y) // //gunakan Math.Floor agar hasil tidak koma
// console.log(hari)
// console.log(tahun + ' tahun', + bulan + ' bulan', + hari + ' hari')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============SOLVE IT 7 PPT 2=============================================================================
// var a = 'Halo Dunia'
// console.log(a.indexOf('a')) // //gunakan indexof untuk mengetahui berapa isi value dalam sebuah variable

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============SOLVE IT 8 PPT 2===============================================================================

// var a = 60/60 // //kecepatan masing - masing mobil dibuat ke dalam menit (dibagi 60)
// var b = 40/60 
// var hasil = a+b // //hasil jumlah dari kecepatan masing - masing
// var menit = 120/hasil // //jarak dibagi hasil jumlah
// console.log(menit)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN IF, ELSE IF, DAN ELSE================================================================
// var nilai = 59 // //tentukan dahulu value variable nya
// if(nilai>80){ // // jika kondisi apa, maka di console.log akan muncul apa
//     console.log('Cumlaude')
// }
// else if(nilai>=60 && nilai<=80){ // //&& menandakan 2 kondisi yang bisa bersamaan
//     console.log('Lulus')
// }
// else{ // //buat else tanpa kondisi, karena dengan else maka otomatis akan menampilkan hasil di luar dari if / else if
//     console.log('Ulang')
// }

// var status = "cerai"
// if(status=="Married"){ // //jika yang ditulis sama dengan kondisi if, akan muncul tulisan di bawah ini
//     console.log("Selamat")
// }
// else if(status=="Cerai"){
//     console.log("HAHA")
// }
// else{
//     console.log("WKWK")
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN OPERATOR PEMBANDING (COMPARISION OPERATORS)===========================================
// var x = 5;
// var y = '5';
// console.log(x == y) // //membuat penjelasan apakah value sama? Namun tipe data beda
// console.log(x === y) // //membuat penjelasan apakah value dan tipe data sama?
// console.log(x > y) // //membuat penjelasan apakah variable 1 lebih besar dari yang 2?
// console.log(x >= y) // //membuat penjelasan apakah variable 1 lebih besar dan sama besar dengan dari yang 2?
// console.log(x < y) // //membuat penjelasan apakah variable 1 lebih kecil dari yang 2?
// console.log(x <= y) // //membuat penjelasan apakah variable 1 lebih kecil dan sama besar dari yang 2?

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //LATIHAN PEMBUKTIAN CIRI - CIRI DATA KELOMPOK (TRUE/FALSE)================================================
// var a=0 // //apabila variable 0, atau tidak ada isinya, maka nilai akan false
// if(a){
//     console.log('masuk') // //jika nilai true
// }
// else{
//     console.log('keluar') // //jika nilai false
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
