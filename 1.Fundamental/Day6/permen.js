var permen=function(hari){
    let output=0

    for(i=1;i<=hari;i++){
        if((i)%10==0){
        output+=2
        }
        else if(i%2==0){
            output++
        }
    }
    return output
}
console.log((permen(10)))