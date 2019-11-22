var arr=[1,2,3,4,5]

const mapSendiri=(bebas1,bebas2)=>{
    var arrBaru=[]
    for(var i=0;i<bebas1.length;i++){
        arrBaru.push(bebas2(bebas1[i]))
    }
    return arrBaru
}

console.log(mapSendiri(arr,(val)=>val*2))