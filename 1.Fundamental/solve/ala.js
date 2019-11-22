var mapalakita=(arr,fn)=>{
    var baru=[]
    for(var i=0;i<arr.length;i++){ 
        baru.push(fn(arr[i]))
    }
    return baru
    
}
var arr1=[1,2,3,4,5]
var arr2=arr1.map((val)=>val*2)
// console.log(arr2)
var arr3=mapalakita(arr1,(val)=>val*3)
// console.log(arr3)
const mapalakita2=(bebas1,bebas2)=>{
    var arrbaru=[]
    for(var i=0;i<bebas1.length;i++){
        arrbaru.push(bebas2(bebas1[i]))
    }
    return arrbaru
}
const filterkitajc11=(afunc,barr)=>{
    var arrbaru=[]
    for(var i=0;i<barr.length;i++){
        if(afunc(barr[i])){
            arrbaru.push(barr[i])
        }
    }
    return arrbaru
}
var arrfilt=arr1.filter((val)=>val>3)
var arrfiltjc11=filterkitajc11((val)=>val>2,arr1)
console.log(arrfilt)
console.log(arrfiltjc11)



function callback(val){
    return val*3
}
var arr4=mapalakita(arr1,callback)
// console.log(arr4)

// var hasil=mapalakita(arr1,(item)=>`Angka ${item}`)
// console.log(hasil);

var filteralakita=(arr,fn)=>{
    var baru=[]
    for(var i=0;i<arr.length;i++){ 
        if(fn(arr[i])){
            baru.push(arr[i])
        }
    }
    return baru
}
const foreachala=(arr,fn)=>{
    for(var i=0;i<arr.length;i++){ 
        arr[i]=fn(arr[i])
    }
    return arr
}
var hasil=foreachala(arr1,(item)=>item*10)