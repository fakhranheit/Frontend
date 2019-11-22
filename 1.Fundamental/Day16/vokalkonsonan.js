var abjad='abcdefghijklmnopqrstuvwxyz'.split('')
const vokalKonsonan=(huruf)=>{
    var output=0
    for(var i=0;i<huruf.length;i++){
        if(huruf[i]=='a'||huruf[i]=='i'||huruf[i]=='u'||huruf[i]=='e'||huruf[i]=='o'){
            output++
        }
       else{
        var urutan=abjad.indexOf(huruf[i])+1
        output+=urutan
       
        }
    }
    return output
}
console.log(vokalKonsonan('azi'))

'Blue Whale'.indexOf('Blute'); 

