//angka pangkat
// const pangkat=(angka)=>{
//     if(Math.sqrt(angka)==Math.floor(Math.sqrt(angka))){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(pangkat(25))

//============================//

//mengubah isi array
// const number=(array)=>{
//     output=''
//     for(i=0;i<array.length;i++){
//         output+=`${i+1}:${array[i]}`
      
//     }
//     return output.split(' ')
// }
// console.log(number(['a','b','c']))

//===========================//

//mengecek password
// const password=(pass)=>{
//     var hilangSpasi=pass.replace(' ','')
//     if(hilangSpasi.length>5){
//         var arrstring= hilangSpasi.split('')
//         var angka=false
//         var huruf=false
//         for(var i=0;i<arrstring.length;i++){
//             if(arrstring[i]>=0){
//                 angka=true
//             }else{
//                 huruf=true
//             }
//         }
//         if(angka==true && huruf==true){
//             return 'password benar'
//         }else if(angka==false && huruf==true ){
//             return 'harus ada angkanya'
//         }else{
//             return 'harus ada hurufnya'
//         }
//     }
    
// }
// console.log(password('daw a22j'))

//============================//

//timeout sendiri
// const timeoutSendiri=(fn,waktu)=>{
//     for(let i=0;i<=waktu*100000;i++){

//     }
//     fn()
// }

// timeoutSendiri(()=>console.log('jc11'),5000)

//=============================//

//interval sendiri
// const intervalSendiri=(waktu)=>{
//     for(let i=1;;i++){
//         if(i%(waktu*10000)===0&&i!==0){
//             fn()
//         }
//     }
// }

// intervalSendiri(()=>console.log('jc11'),1000)

//==============================//

// //menghitung lembah dan gunung
 const lembah=(x)=>{
     var output=0
     var lemb=0
     var gunung=0
     for(i=0;i<x.length;i++){
         if(x[i]=='u'){
             output+=1
         }else if(x[i]=='f'){
             output+=0
         }else if(x[i]=='d'){
             output-=1
         }
         if(x[i] == 'u'&& output==0){
             lemb+=1
         }
         if(x[i]=='d'&&output==0){
            gunung+=1
         }
     }
     console.log(gunung)
     console.log(lemb)
 }
 lembah('ududdu')