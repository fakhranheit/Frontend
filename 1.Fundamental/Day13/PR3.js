const minMax=(arr=[],cond)=>{
        arr.sort((a,b)=>a-b)
        if(cond=='min'){
            return arr[0]
        }else if(cond=='max'){
            return arr[arr.length-1]
        }
        else{
            return 'masukkan min/max'
        }
}
console.log(minMax([200,1,0.2,3,45,650],'max'))