// //=========LATIHAN 1 PPT 9 MENGGUNAKAN CONST (CONSTANT) UNTUK MENGGANTIKAN VAR/LET========================
// const pi = 3.14 // //dengan const, properti tidak dapat diubah
// function luasLingkaran(r){
// const pi = 10
// console.log('Luas='+pi*r*r)
// }
// console.log(pi)
// luasLingkaran(5) // //tulis properti dari function, kemudian isi value nya

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============LATIHAN 2 PPT 9 MENGGUNAKAN TICK (`) DALAM PENULISAN KODE====================================
// function hai(nama) { // //tulis function seperti biasa
//         console.log(`Hai, aku ${nama}`) // //gunakan tick, dan tulis isi kode. Sudah dengan isi string dan variable
//         console.log(`Usiaku ${7*3}`) // //gunakan simbol $ untuk memanggil isi/value sebuah properti
//     }
//     hai('Arif')// //value dari properti

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 3 PPT 9 MENULIS SPREAD OPERATOR=======================================================
// var huruf='abcdef'.split('') // //masukan properti variable serta valuenya (gunakan metode jika perlu)
// var angka='123'.split('') // //masukan properti ke-2
// console.log([...huruf,...angka]) // //dengan simbol '...', value properti tersebut akan terpangggil (sesuai urutan yang ditentukan dari posisi koma)

// var z = [1,2,3] // //contoh ke-2
//     function jumlah(x,y,z){ // //buat function nya terlebih dahulu
//     console.log(x+y+z) // //buat perhitungan di console
//     }
//     jumlah(...z) // // gunakan simbol '...' untuk mengakses angka, dan memasukan ke console

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 4 PPT 9 PENULISAN ARROW (=>) FUNCTION=================================================
// let halo = function(){ // //contoh ke-1
//     console.log('Halo Dunia!') // //penulisan biasa dengan function
//     }
// let hai = () => console.log('Hai Hacker!') // //dengan arrow, function tidak perlu ditulis
//     halo(); hai();

// let pi = () => { // //contoh ke-2
//     return 3.14 // //penulisan biasa dengan return untuk menampilkan hasil saat console.log
//     }
// let g = () => 9.8 // //dengan arrow, tidak perlu menuliskan return namun langsung hasilnya
//     console.log(pi());
//     console.log(g());

// var halo = (nama) => { // //contoh ke-3
//     console.log(`Halo ${nama}`)// //penulisan function biasa dengan sebuah paramater
//     }
//     halo('Andi')
// var hai = nama => console.log(`Hai ${nama}`) // //dengan arrow, tidak perlu memberi dalam kurung untuk properti function
//     hai('Budi')

// var halo = (x,y) => { // //namun, jika menggunakan 2 parameter, properti sebuah function harus dibuat dalam kurung
//     console.log(`Halo ${x} ${y}`)
//     }
//     halo('Andi',21);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 5 PPT 9 MEMBUAT CALLBACK FUNCTION====================================================
// let x = () => {
//     console.log('Hai ini X!')
//     }
//     let y = (callback) => {
//     console.log('Halo ini Y!')
//     callback()
//     }
//     y(x)

// var x=(a)=>{
//     console.log('ini x'+a)
//     }
// var z=()=>{
//     console.log('ini z')
//     }
// var y=(cb=(a)=>{console.log('ini cb'+a)},numb)=>{
//     console.log('ini y')
//     cb(numb)
// }
// y(x,2)

// var hitung = (no1, no2, op) => { // //contoh penulisan tanpa callback
//     if(op=='kali'){
//     return no1*no2
//     }
//     if(op=='bagi'){
//     return no1/no2
//     }
// } 
// console.log(hitung(10, 2, 'bagi'));

// var kali = (x, y) => x * y // //contoh penulisan dengan callback
// var bagi = (x, y) => x / y
// var hitung =(no1, no2, op) => op(no1, no2)
// console.log(hitung(10, 2, bagi))

// var hitung = (no1, no2, op) => op(no1, no2) //contoh penulisan callback dengan function tambahan
// console.log(hitung(2, 3, function(x,y) { return x + y}))

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //==========LATIHAN 6 PPT 9 LATIHAN ARRAY FILTERING====================================================
// var w = [0,1,2,3,4,5] // //tulis variable dalam bentuk array
// var x = w.filter((val) => val !== 2) // //filter 1, memanggil angka (dari array diatas) yang bukan sama dengan angka 2
// var y = w.filter((val) => val % 2 == 0) // //memanggil angka yang habis dibagi 2 (sisa baginya = 0)
// var z = w.filter((val) => val % 2 !== 0) // //memanggil angka yang ada sisa bagi jika dibagi dengan angka 2
// console.log(x)
// console.log(y)
// console.log(z)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN 7 PPT 9 LATIHAN ARRAY MAPPING=======================================================

// var w = [1,4,9,16,25] // //tulis variable beserta value nya dalam bentuk array
// var x = w.map(Math.sqrt); // //membuat angka (dari array di atas), ke dalam bentuk akar pangkat 2
// var y = w.map((val)=> val * 2); // //membuat angka tiap array dikalikan dengan 2
// var yy = w.map((val,index)=> (index)+ '.angka'+val) // //membuat string dengan value dari array
// var z = w.map((val)=> val!==9); // //membuat klarifikasi boolean. Apakah angka angka di array samadengan 9?
// console.log(x);
// console.log(y);
// console.log(yy);
// console.log(z);

// var orang = [ // //contoh ke-2
//     {nama : "Andi", marga: "Hasibuan"}, // //buat variable dalam bentuk array, kemudia buat valuenya
//     {nama : "Budi", marga: "Sinaga"},
//     {nama : "Caca", marga: "Pasaribu"}
//     ]
// function namaLengkap(item) { // //buat function untuk membuat operasi
//     var fullname = [item.nama,item.marga].join(" ") // //nama dan marga di join, untuk menciptakan variable fullname
//     return fullname
//     }
// function tesMap() {
//     console.log(orang.map(namaLengkap)) // //memanggil semua variable
//     console.log(orang.map(namaLengkap)[0])
//     console.log(orang.map(namaLengkap)[1])
//     console.log(orang.map(namaLengkap)[2])
//     }
//     tesMap()

//////////////////////////////////////////////////////////////////////////////////////////////////////////