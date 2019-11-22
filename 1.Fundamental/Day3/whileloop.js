const bintang=()=>{

    var output=''
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            output+='*'
        } 
        output+='\n'
    }
    return output
}
console.log(bintang())