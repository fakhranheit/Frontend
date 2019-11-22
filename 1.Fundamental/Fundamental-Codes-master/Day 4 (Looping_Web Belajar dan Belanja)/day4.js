// //=============LATIHAN WHILE DENGAN AKUMULASI SAMPAI KONDISI TERPENUHI======================================
// var angka = 1 // //masukan sebuah variable
// while(angka <=10){ // //akan melakukan looping jika kondisi masih benar. Angka merupakan angka yang dibuat dari awal atau perulangan setelah melakukan looping seblumnya
// console.log(angka)
// angka++ // //setelah kondisi benar, maka variable akan bertambah. Kemudian masuk lagi ke while, dengan kondisi angka sudah bertambah 1
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN DI WHILE DENGAN AKUMULASI SAMPAI KONDISI TERPENUHI====================================
// var angka = 1;
// do{ // //dengan do, maka looping akan jalan1 kali, tanpa melihat kondisi
// console.log(angka)
// angka++ // //setelah kondisi benar, maka variable akan bertambah. Kemudian masuk lagi ke while, dengan kondisi angka sudah bertambah 1
// } while(angka <=10) // //akan melakukan looping hingga kondisi terpenuhi

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN FOR DENGAN AKUMULASI SAMPAI KONDISI TERPENUHI=========================================
// var x = '' // //buat variable dengan isi kosong
// for(x=1; x<=10; x++){ // //tentukan nilai variable di atas, lalu tentukan sampai berapa kondisi akan terpenuhi, kemudian selama kondisi belum terpenuhi apa yang akan terjadi pada variable?
// console.log(x);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============LATIHAN FOR DENGAN KONDISI IF===============================================================
// var x = ''
// for (x=0; x<10; x++) { // //buat dahulu kondisi yang akan terjadi selama looping
//     if(x%2==1){ // //jika kondisi if terpenuhi, maka akan berlanjut
//         console.log(x);
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============LATIHAN LOOP DENGAN SIMBOL BINTANG===========================================================
// var jumlahbintang=10 // //tentukan nilai maksimal variable
// var output=''
// for(var i=0; i<jumlahbintang; i++){ // //simbol akan terus berjalan (tercetak), hingga i lebih besar daripada nilai maksimal variable
//     output+='\n*'
// }
// console.log(output)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==============SOLVE IT 16 PPT 5===========================================================================
// var z ='' // //buat variable dengan isi kosong
//     for(i=0; i<5; i++){ // //buat kondisi looping pertama. Nilai i merupakan hasil akumulasi dari looping di bawah
//         for(j=0; j<=i; j++){ // //buat kondisi kedua. Jika nilai j lebih besar daripada i, maka kondisi selesai. Nilai j tidak akan menjadi nilai terakhir (setelah increament) apabila looping dimulai dari looping kondisi pertama
//             z += ' * '
//         }
//         if(i<4){ // //kondisi ketiga bergantung dari nilai i setelah increament
//         z +='\n'
//         }
//     }
// console.log(z)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============SOLVE IT 17 PPT 5=============================================================================
// var z = '' // //buat variable dengan isi kosong
//     for(i=0; i<5; i++){ // //buat kondisi looping pertama. Nilai i merupakan hasil akumulasi dari looping di bawah
//         for(j=i; j<5; j++){ // //buat kondisi kedua. Jika nilai j lebih besar daripada angka yang telah ditentukan, maka kondisi selesai. Nilai j merupakan angka yang sama dengan i (mengikuti kondisi terakhir looping)
//             z += ' * '
//         }
//         if(i<4){ // //kondisi ketiga bergantung dari nilai i setelah increament
//         z +='\n'
//         }
//     }
// console.log(z)

// var z = '' // //contoh ke-2, dengan decreament
//     for(i=0; i<5; i++){
//         for(j=5; j>i; j--){ // //tentukan dahulu kondisi angka j. Apabila pada akhirnya nilai j lebih kecil daripada nilai i (nilai terakhir looping), maka kondisi akan berhenti. Sementara jika masih, makan nilai j akan terus berkurang 1
//             z += ' * '
//         }
//         if(i<4){
//         z +='\n'
//         }
//     }
// console.log(z)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===============LATIHAN LOOP DENGAN SIMBOL BINTANG KELIPATAN ANGKA GANJIL===================================
// let z=''
//     for(a=0; a<5; a++){ // //buat kondisi pertama, dengan nilai a akan terus bertambah sesusai looping
//         // for(b=a; b<5-1; b++){
//         //     z+=''
//         // }
//         for(c=0; c<=a; c++){ // //looping akan selesai jika nilai c lebih besar dari a
//             z+=' * '
//         }
//         for(d=0; d<=a-1; d++){ // //looping akan selesai jika nilai d lebih besar dari a kurang 1
//             z+=' * '
//         }
//         if(a<5-1){
//             z+='\n'
//         }
//     }
// console.log(z)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////