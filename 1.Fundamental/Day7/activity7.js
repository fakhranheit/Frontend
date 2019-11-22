// function pangkat(a,b){
//     var hasil=a**b
//     return hasil
// }
// console.log(pangkat(3,4))

// function pangkat(a,pang){
//     if (pang==0){
//         return 1
//     }
//     else{
//         var output=a
//         for(i=0;i<pang-1;i++){
//             output*=a
//         }
//     return output
//     }
// }
// console.log(pangkat(3,3))

var x=setInterval(waktu,1000)
var time=10
function waktu(){
    console.log(time)
    time-=1
    if(time==0){
        clearInterval(x)
    }
}