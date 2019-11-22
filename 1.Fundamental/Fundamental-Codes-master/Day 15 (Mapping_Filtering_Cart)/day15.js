// //==============PEMBAHASAN ARRAY MAPPING==================================================================
// var orang = [ // //buat variable dalam array, dengan 2 parameter dan 2 value
//     {nama : "Andi", marga: "Hasibuan"}, // //array ke-1
//     {nama : "Budi", marga: "Sinaga"}, // //array ke-2
//     {nama : "Caca", marga: "Pasaribu"} // //array ke-3
//     ]

//     function namaLengkap(item, index) { // //buat lah sebuah function dengan properti yang berisi 2 parameter
//     var fullname = [item.nama,item.marga].join(" ") // //functionnya berisi sebuah variable yang menggambungkan item nama dan marga (dalam 1 array), lalu dibuat metode join
//     return fullname
//     }
//     function tesMap() { // //kemudian, buat function callback
//     console.log(orang.map(namaLengkap)); // //untuk memanggil semua array yang telah digabungkan
//     console.log(orang.map(namaLengkap)[0]); // //untuk memanggil salah satu array yang telah digabungkan
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
//     }
//     tesMap()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============LATIHAN ARRAY MAPPING========================================================================
// var arr = [1,2,3,4,5] // //buat variable berisi array
//     const mapalakita = (a,b)=>{ // //buat function yang berisi 2 parameter (a untuk array, b untuk function)
//         var arrbaru=[] // //buat variable yang berguna untuk menampung array baru
//         for(var i=0; i<a.length; i++){ // //buat metode perulangannya, dimana i akan berhenti apabila lebih besar daripada panjang array
//             arrbaru.push(b(a[i])) // //agar tempat array baru dapat kita masukan array, gunakan metode push (namun hasil array baru ditentukan oleh function)
//         }
//         return arrbaru
//     }
//     function hitung(val){ // //sebelum i bertambah, nilai array baru melewati operasi function terlebih dahulu. Hasil dari operasi function inilah yang akan masuk ke lokasi array baru
//         return val*3 // //jika sudah melewati ini. Maka akan kembali ke perulangan, dengan kondisi i bertambah
//     }
// console.log(mapalakita(arr,hitung)) // //parameter pertama berisi isi array, kedua berisi function

// var arrcoba = [1,2,3] // //contoh ke-2
//     const mapcoba = (x, y)=>{ // //posisi parameter tidak menentukan apakah dia array atau function. Parameter terakhir pun bisa jadi function
//         var arrnew = []
//         for(i=0; i<y.length; i++){ // //namun panjang array ditentukan oleh parameter yang ke berapa
//             arrnew.push(x(y[i])) // //disini x berarti function, sementara y ialah array
//         }
//         return arrnew
//     }
//     function operasi(angka){
//         return angka*2
//     }
// console.log(mapcoba(operasi, arrcoba)) // //begitupun dengan penulisan di console.log, parameter ke-1 ialah function, kedua ialah array

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN ARRAY FILTERING=========================================================================
// let arr = [1, 2, 3, 4, 5] // //buat variable dalam array dengan isinya
//     const filternew=(a,b)=>{ // //disini, parameter ke-1 ialah array, ke-2 ialah function
//         var arrbaru = [] // //buat variable yang berguna untuk menampung array baru
//             for(var i=0; i<a.length; i++){ // //buat metode perulangannya, dimana i akan berhenti apabila lebih besar daripada panjang array
//                 if(b(a[i])){ // //terjadi penyaringan, jika array yang sesuai kondisi (sesuai dengan function)
//                     arrbaru.push(a[i]) // //sebelum push, yang dijalankan ialah functionnya
//                     // console.log(arrbaru)
//                 }
//             }
//             return arrbaru
//         }
//     function operasi(z){ // //disini terjadi operasi function. Yang kemudia diterima oleh if
//         return z>2 
//     }
// console.log(filternew(arr, operasi))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============LATIHAN MEMPREDIKSI KENAIKAN PENDUDUK==========================================================
// const berapatahun = (awal, persen, pendatang, target)=>{ // //buat function dengan 4 parameter
//     var penduduk = awal // //menjelaskan bahwa variable penduduk sama dengan nilai variable awal
//     var tahun = 0 // //mula tahun adalah 0 (agar dapat dibuat akumulasi)
//     do{ // //melakukan looping terus menerus hingga while terpenuhi
//         penduduk+=pendatang+(penduduk*(persen/100)) // //operasi perhitungan
//         tahun++ // //jika operasi perhitungan selesai, maka tahun bertambah 1 (hingga looping selesai)
//     }while(penduduk<target) // //akan berjalan terus sampai penduduk lebih besar atau sama dengan target
//     return tahun + ' Tahun' // //hanya me-return angka tahun
// }
// console.log(berapatahun(1000,5,50,1200)) // //jumlah penduduk awal, persentase pertumbuhan, pendatang pertahun, dan target penduduk yang mau dicapai
// console.log(berapatahun(15000,5,1000,30000))

    