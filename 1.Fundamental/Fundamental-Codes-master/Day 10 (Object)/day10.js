// //==========LATIHAN 1 PPT 8 MERUBAH VALUE DARI SUATU VARIABLE DENGAN OBJEK===========================
// var Andi = { // //variable awal
//     namaDpn: "Andi",
//     namaBlkg: "Susilo",
//     usia: 50,
//     pekerjaan: "Politisi"
//     }
    
// var Andi = new Object() // //variable baru menggunakan 'new Object()'
//     Andi.namaDpn = 'Andi' // //gunakan nama variable di depan, lalu titik, kemudian properti. Setelah itu masukan value baru nya
//     Andi.namaBlkg = 'Susilo'
//     Andi.usia = 50
//     Andi.pekerjaan = 'PNS' // //mengubah value pekerjaan

// console.log(Andi)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 2 PPT 8 CARA MENULIS OBJEK YANG MENGGUNAKAN FUNCTION========================
// function orang(nama, usia, job) { // //gunakan penulisan function pada umumnya
//  this.namaDpn = nama; // //dalam objek, untuk memanggil suatu properti harus dengan 'this.isi_properti = jenis_isi_value'
//  this.umur = usia;
//  this.pekerjaan = job;
// }
//  var Andi = new orang('Andi', 30, 'PNS'); // //gunakan penulisan variable untuk memasukan value yang menggunakan function, kemudian masukan value dari tiap properti
//  console.log(Andi.umur)

////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 3 PPT 8 MENULIS OBJEK DENGAN CONSTRUCTOR===================================
// class Orang{
//     constructor(nama,usia,pekerjaan){ // //gunakan constructor, lalu tulis properti
//         this.nama=nama,
//         this.usia=usia,
//         this.pekejaanorang=pekerjaan
//     }
// }
// var namakelas=[] // //karena akan memasukan sebuah array (push), buat variable dengan array kosong
// namakelas.push(new Orang('bobi',35,'pengacara')) // //array ke-0. Lalu gunakan push untuk memasukan ke array kosong yang udah dibuat, dst
// namakelas.push(new Orang('zaky',17,'ojol')) // //array ke-1
// console.log(namakelas[1]) // //tulis nama variable dengan array kosong, dan tulis urutan array dengan kurung siku

// var name='nama' // //jika nantinya akan memanggil 1 value dalam 1 properti, buat variable nya dahulu. Agar hasilnya tidak undifined
// console.log(namakelas[1][name]) // //jika hanya ingin memanggil 1 value dalam 1 properti di dalam 1 array

// namakelas[0].usia+=15 // //jika ingin menambah atau mengurangi suatu nilai tertentu di dalam value
// console.log(namakelas)

// var age='usia' // //buat dahulu variable nya yang akan kita gunakan untuk menghapus. Agar hasilnya tidak undifined
// delete namakelas[0][age] // //jika ingin menhapus suatu value dan properti sebuah array
// console.log(namakelas)

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 4 PPT 8 METODE MENGGABUNGKAN VALUE OBJEK DALAM SUATU FUNCTION===================
// var orang = {
//     namaDpn : "Andi",
//     namaBlk : "Susilo",
//     usia : 50,
//     namaFull : function() { // //buat layout function nya
//     return this.namaDpn + " " + this.namaBlk;
//     }
// }; 
// console.log(orang.namaFull())

/////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 5 PPT 8 MEMERIKSA PROPERTI OBJEK============================================
// var manusia = { // //buat variable serta isi objek (lengkap dengan properti & value)
//     kepala: 1,
//     mata: 2,
//     telinga: 2,
//     tangan: 2,
//     kaki: 2,
// };
// var namaProp;
// for (var i in manusia) { // //panggil variable (contoh: i) di dalam (dengan "in"), lalu nama variable di atas
//     console.log( manusia[i]);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 6 PPT 8 MEMBUAT PROTOTYPE DARI FUNCTION======================================
// function Orang(nama, lahir, job) { // //buat layout objek dengan model function
//     this.nama = nama; // //jangan lupa gunakan "this."
//     this.lahir = lahir;
//     this.job = job;
// }
//     Orang.prototype.marga = 'Hasibuan'; // //masukan properti dari prototype (contoh: marga), serta value-nya
//     Orang.prototype.usia = function() { // //jika ingin membuat function baru untuk di eksekusi di console log
//         return 2019 - this.lahir; // //isi dari function (contoh: perhitungan usia di tahun 2019)
//     };
//     var budi = new Orang('Budi', 1992, 'PNS'); // //masukan variable objek dengan lengkap
//     console.log(budi); // //jika ingin menampilkan semua value dari prototype
//     console.log(budi.marga); // //jika hanya ingin menampilkan properti dari prototype
//     console.log(budi.usia()); // //jika ingin menampilkan hasil isi dari function yang baru dibuat
//     console.log(new Orang('kenang',1999,'exmud').usia()) // //membuat isi objek dari variable yang baru, namun hanya ingin menampilkan satu jenis value (contoh: usia)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN TAMBAHAN PPT 8 MENULIS FUNCTION DENGAN METODE LAIN=============================
// var kelas='jc13' // //pilih mau ambil variable apa
// var namamurid=kelas=='jc11'?'farhan':kelas=='jc12'?'budi':'bambang' // //simbol '?' menandakan isi dari suatu variable simbol ':' menandakan value dari variable selain yang telah ditulis
// console.log(namamurid)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 7 PPT 8 MEMBUAT INHERITANCE (CALL) DENGAN FUNCTION====================================
// function orang(nama, usia, job) { // //buat function serta propertinya (dalam kurung)
//     this.namaDpn = nama
//     this.usia = usia
//     this.pekerjaan = job
//     }
// function atlit(nama, usia, job, cab, pres){// //buat function kedua dengan properti awal yang sama, dantambahan properti
//     orang.call(this, nama, usia, job) // //untuk menyamakan value pada properti gunakan 'call' saat memanggil function sebelumnya
//     this.cabor = cab
//     this.prestasi = pres
//     }

// var Andi = new atlit ('Andi',20,'PNS','Ceria', 'Remaja') // //masukan value properti (3 pertama sama dengan function ke-1, dan berikutnya tambahan dari function ke-2)
// console.log(Andi)

///////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 8 PPT 8 MEMBUAT INHERITANCE (CALL) WITHOUT ARGUMENT DENGAN FUNCTION===================
// function pizza() { // //buat function pertama, lengkap dengan properti dan value-nya
//     this.diameter = 30
//     }
// function pizzaKeju(){ // //buat function ke-2
//     pizza.call(this) // //gunakan call untuk memanggil properti serta value dari function pertama
//     this.topping = 'Keju'
//     this.harga = '50K'
//     }
// function pizzaJamur(){ // //buat function ke-3 dst
//     pizza.call(this) // //gunakan call untuk memanggil properti serta value dari function pertama
//     this.topping = 'Jamur'
//     this.harga = '65K'
//     }

// var satu = new pizzaKeju();
// var dua = new pizzaJamur();
// console.log(satu)
// console.log(dua)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============LATIHAN 9 PPT 8 MEMBUAT PERHITUNGAN LUAS DAN KELILING PERSEGI=========================
// function persegi(sisi) {
//     this.sisi = sisi // //jangan masukan angka/valuenya terlebih dahulu, tapi buat rumusnya
//     this.luas = function(){ // //buat function rumus luas persegi
//     return Math.pow(this.sisi,2) // //karena ini persegi (sisi x sisi), gunakan math.pow (kuadrat dari sisi)
//     }
    // this.kll = function(){ // //buat function rumus keliling persegi (4 x sisi)
    // return 4 * this.sisi
    // }
// }
//     var x = new persegi(8); // //masukan value/sisi persegi
//     console.log('Luas = '+x.luas());
//     console.log('Keliling = '+x.kll());

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============TUGAS #1 DAY 10 ALFABET BESAR KE KECIL DAN KECIL KE BESAR==========================
// var BesarKecil=(a,b)=>{
//     var alfabetBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//     var alfabetKecil = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     var output = ''

//     for(var i=0; i<a.length; i++){
//         for(j=0; j<alfabetBesar.length; j++){
//             if(a[i]==alfabetBesar[j]){
//                 if(b=='kecil'){
//                     output+=alfabetKecil[j]
//                 }
//                 else{
//                     output+=alfabetBesar[j]
//                 }
//             }
//             if(a[i]==alfabetKecil[j]){
//                 if(b=='kecil'){
//                     output+=alfabetKecil[j]
//                 }
//                 else{
//                     output+=alfabetBesar[j]
//                 }
//             }
//         }
//     }
//     return output
// }
// console.log(BesarKecil('nAMa'))

/////////////////////////////////////////////////////////////////////////////////////////////////////////




            