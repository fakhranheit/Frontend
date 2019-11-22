// //=============LATIHAN IDENTIFIKASI INDEX BERDASARKAN ISI ARRAY===========================================
// var number = function(array){ // //buat variable dengan sebuah function beserta valuenya
//     return array.map((val,index)=> (index+1)+': ' +val) // //buat map untuk memetakan index serta diberi penamaan angka
// }
// console.log(number(['a', 'b', 'c']))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN MEMBUAT VALIDASI ANGKA KUADRAT ATAU TIDAK=============================================
//  cekkuadrat=(n)=>{ // //buat function dengan sebuah parameter
//     if(Math.sqrt(n)%1==0)return true // //buat rumus akar (Math.sqrt). Dan jika sisa bagi akar tersebut 0, maka hasilnya true
// return false // //jika ada sisa bagi, maka false (berarti, angka tersebut bukan angka kuadrat secara alami)
// }
// console.log(cekkuadrat(4))
// console.log(cekkuadrat(8))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN MEMERIKSA PASSWORD YANG TELAH DIBUAT=================================================
// const checkpass1=(str)=>{ // //buat sebuah variable dengan function serta parameternya
//     var hilangspasi = str.replace(' ', '') // //membuat sebuah antisipasi apabila string yang diisi ada spasi
//     if (hilangspasi.length>5){ // //buat kondisi apabila string yang ditulis lebih dari 5 huruf
//         var arrstring = hilangspasi.split('') // //membuat variable baru untuk metode memisahkan string satu per satu
//         var angka = false // //buat sebuah variable dengan asumsi awal false
//         var huruf = false // //buat sebuah variable dengan asumsi awal false
//         for(var i=0; i<arrstring.length; i++){ // //buat looping dengan kondisi akan berhenti apabila i lebih besar dari panjang string
//             if(arrstring[i]>=0){ // //jika salah satu string yang terdeteksi ada angka (lebih besar atau sama dengan 0), maka variable angka sudah benar
//                 angka=true
//             }
//             else{ // //selain angka, maka ada huruf yang tertulis di string
//                 huruf=true
//             }
//         }
//         if (angka==true && huruf==true){ // //buat kondisi jika kedua variable terpenuhi, maka akan me-return benar
//             return 'Password Sesuai'
//         }
//         else if (angka==false && huruf==true){ // //buat kondisi berikutnya apabila string tidak memiliki angka
//             return 'Harus Memiliki Angka' // //maka tulisan yang muncul mengharuskan string dengan isi angka
//         }
//         else{ // //buat kondisi terakhir. Yakni apabila string tidak memiliki huruf
//             return 'Harus Memiliki Huruf' // //maka tulisan yang muncul mengharuskan string dengan isi huruf
//         }
//     }
// else{ // //sebuah kondisi apabila string yang ditulis tidak lebih dari 6
//     return 'Harus Memiliki 6 Karakter'
//     }
// }
// console.log(checkpass1('786756'))
// console.log(checkpass1('ahubkhi'))
// console.log(checkpass1('AB78'))
// console.log(checkpass1('ABC123'))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN MENAMPILKAN SEBUAH STRING DENGAN WAKTU TERTENTU TANPA METODE TIMEOUT===================
// const timeout=(fn,waktu)=>{ //buatsebuah variable dengan function beserta 2 parameter
//     for(let i = 0; i<=waktu*1000000; i++){ // //buat sebuah looping dimana waktu dikalikan dengan 1 juta
//     }
//     fn() // //maka function akan berjalan sesuai parameter yang dibuat
// }
// // //buat console.log dengan parameter ke-1 berisi console.log string. Parameter ke-2 berisi angka waktu yang akan dikalikan dengan angka di dalam looping
// timeout(()=>console.log('aha'), 3000)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN MENAMPILKAN SEBUAH STRING DENGAN WAKTU TERTENTU TANPA METODE INTERVAL==================
// const interval=(fn,waktu)=>{ // //buat function dengan variable beserta 2 parameter
//     for(let i = 1; ;i++){ // //buat sebuah looping yang nilai i akan berjalan terus (dibuat tanpa standar ukuran lebih besar atau lebih kecil dari suatu parameter/value)
//         if(i%(waktu*100000)==0 && i!==0){
//         // //buat sebuah kondisi dimana jika sisa bagi i dengan parameter waktu dikali sebuah angka adalah 0. Dan jika nilai i tidak sama dengan 0
//             fn() // //maka parameter 1 akan tampil
//         }
//     }
// }
// interval(()=>console.log('aha'), 1000) // //buat console.log dengan parameter ke-1 berisi console.log string. Parameter ke-2 berisi angka waktu yang akan dikalikan dengan angka di dalam looping

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN MENGHITUNG LEMBAH DAN GUNUNG DARI STRING==========================================
const valley = (x) =>{ // //buat variable dengan function beserta 1 parameter
    var output = 0 // //buat variable output output akhir dengan angka 0, agar nilai awal tidak bertambah
    var lembah = 0
    var gunung = 0
    for(i=0; i<x.length; i++){ // //buat sebuah looping dimana i lebih besar daripada panjang array
        if(x[i]=='u'){ // //jika dalam array tersebut ada huruf 'u' (up), maka angka bertambah 1
            output+=1
        }
        else if(x[i]=='f'){ // //jika dalam array tersebut ada huruf 'f' (forward), maka angka tidak bertambah atau 0
            output+=0
        }
        else if(x[i]=='d'){ // //jika dalam array tersebut ada huruf 'd' (down), maka angka berkurang 1
            output-=1
        }
    if(x[i] == 'u' && output == 0){ // //jika dalam isi array tersebut ada huruf 'u', dan kondisi output 0, maka lembah bertambah 1
        lembah+=1
        }
    if(x[i] == 'd' && output == 0){ // //jika dalam isi array tersebut ada huruf 'd', dan kondisi output 0, maka gunung bertambah 1
        gunung+=1
        }
    }
    console.log(lembah);
    console.log(gunung);
}
valley('ududfdudu') // //buat isi parameter function dibawah ini

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


    
