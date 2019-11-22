const ambil=(a)=>{
    var pisah=a.split('/')
    var akhir=pisah[2].split('.')
    var output=''
    if(akhir.length==2){
        output+=akhir[0]
    }else{
        output+=akhir[1]
    }
    return output
}
console.log(ambil('http://www.github.com/carbonfive/raygun'))