ulang=(a)=>{
    kata=a.toUpperCase().split('')
    for(i=0;i<kata.length;i++){
        for(j=i+1;j<kata.length;j++){
            if(kata[i]==kata[j]){
                return kata[i]
            }
        }
    }
}
console.log(ulang('makan'))