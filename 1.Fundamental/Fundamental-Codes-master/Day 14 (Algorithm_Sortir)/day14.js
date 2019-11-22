// //===========PEMAHAMAN REPEAT==============================================================================
// const repeat=(a=['b', 'h', 'h', 'j', 'u', 'k'])=>{ // //buat variable dengan isinya (beserta isi dengan nilai yang sama)
//     for(var i=0; i<a.length; i++){ // //buat metode perulangannya
//         for(var j=i+1; j<a.length; j++){ // //buat metode perulangan kedua, namun posisi j (length) lebih besar 1 dari i.
//             if(a[i]==a[j]){ // //dimana value array saat i dan j sama, maka itulah hasilnya
//                 return a[i]
//             }
//         }
//     }
// }
// console.log(repeat())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //=============PEMAHAMAN PALINDROME========================================================================
// const Palindrome = (kata) => {
//     const karakter =
//     kata.toLowerCase().replace(/[^a-z]/g, '')
//     .split('')
//         if (karakter.join('') ===
//         karakter.reverse().join('')) {
//         return true
//         } else {
//         return false
//         }
//     }
//     const hasil = Palindrome("Malam")
// console.log(hasil)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============PEMAHAMAN REVERSE WORDS=====================================================================
// const reverseWords = (string) => { // //buat variable dengan jenis valuenya
//     const wordsArr = string.split(' ') // //buat variable baru dengan perintah split string yang akan dibuat
//     // console.log(wordsArr)
//     let reversedWordsArr = [] // //buat variable dengan array kosong sebagai wadah push
//     wordsArr.map((word) => { // //map berguna untuk memetakan isi dari string yang akan dibuat
//         let reversedWord = ''
//         for (let i = word.length - 1; i >= 0; i--) {
//             reversedWord += word[i]
//             // console.log(reversedWord)
//         } 
//         reversedWordsArr.push(reversedWord)
//     });
//     return reversedWordsArr.join(' ')
// };
// console.log(reverseWords('Hai aku Lintang'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //============PEMAHAMAN BUBBLE SORT========================================================================
// var x = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1] // //buat variable dengan isi anggka dalam array secara acak
// const bubbleSort = (array) => { // //buat functionnya dengan jenis value (array)
//     for (let i = array.length; i > 0; i--) { 
//         for (let j = 0; j < i; j++) {
//             if (array[j] > array[j + 1]) {
//             const temp = array[j]
//             array[j] = array[j + 1]
//             array[j + 1] = temp
//             }  
//         }
//     }
//     return array
// }
// console.log(bubbleSort(x))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //===========LATIHAN MEMBUAT PENULISAN STRING SECARA AKUMULATIF============================================
// const alfabet=(huruf)=>{ // //buat variable tetap dengan function serta jenis valuenya
//     var output = ''
//     for(var i = 0; i < huruf.length; i++){ // //kondisi akan berhenti jika i sudah lebih besar daripada jumlah baris array. i akan terus bertambah jika looping selesai.
//         output+=huruf[i].toUpperCase() // //sebelum mulai ke looping berikutnya, akan mencetak sebuah output
//         for(var j = 0; j<i; j++){ // //kondisi akan berhenti jika j lebih besar daripada nilai i (yang sudah akumulasi)
//             output+=huruf[i].toLowerCase() // //sebelum looping naik ke kondisi sebelumnya, output akan mencetak sesuatu
//         }
//         if (i<huruf.length-1){ // //jika looping di atas telah selesai, maka akan masuk looping yang ini. Keadaan akan berhenti apabila nilai i akumulasi lebih besar daripada jumlah baris array
//             output+='-'
//         }
//     }
//     return output
// }
// console.log(alfabet('ABCD'))