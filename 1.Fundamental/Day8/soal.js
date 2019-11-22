function gabung(a,b){
    var output=''
    for(i=0;i<a.length;i++){
        if (i<a.length-1){
            output+=a[i]+b
        }
        else{
            output+=a[i]
        }
    }  
    return output
}

console.log(gabung(['f','a','k'],'+'))