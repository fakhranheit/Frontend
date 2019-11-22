function latihan(num=0){//num adalah objek
    var str=String(num).split('')
    var output=''
    for(i=0;i<str.length;i++){
        str[i]=parseInt(str[i])
        output+=str[i]*Math.pow(10,str.length-1-i)
        if(i<str.length-1){
            output+='+'
        }
    }
    return output
}

console.log(latihan(1234))

// console.log(86*Math.pow(10,2))

