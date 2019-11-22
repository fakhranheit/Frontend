// function deret(angka){
//     var spasi=''
//     for(i=0;i<angka;i++){
//         for(j=i;j<angka;j++){
//             console.log(i)
//         }
//     }
// }
// console.log(deret(5))

// function urutan(angka){
//     var output=' '
//     for(i=0;i<angka;i++){
//         output+=''
//         if (angka==3){
//             output+=''
//         }
//     }
//     return output
// }
// console.log(urutan(10))

function urutan(angka){
    var output=''
    for(i=1;i<angka;i++){
        if((i)%3==0&&(i%5==0)){
            output+='PurwaDhika'
        }
        else if ((i)%3==0){
            output+='Purwa'
        }
        else if((i)%5==0){
            output+='Dhika'
        }
        else{
            output+=(i)+' '
        }
    }
    return output
}
    console.log(urutan(30))