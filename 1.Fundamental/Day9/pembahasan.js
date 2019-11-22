const cloneincl=function(a=' ',b){
    if(b.length==1){
        for(i=0;i<a.length;i++){
            if(b==a[i]){
                return true
            }
        }
        return false
   }else{
       for(i=0;i<a.length;i++){
           if(b==a.substr(i,b.length)){
               return true
           }
       }
       return false
   }
}
console.log(cloneincl('hello','el'))