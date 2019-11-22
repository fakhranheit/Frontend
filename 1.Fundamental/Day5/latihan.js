let z=''
for(a=0;a<5;a++){
    for(b=a;b<5-1;b++){
        z+=''
    }
    for(c=0;c<=a;c++){
        z+='*'
    }
    for(d=0;d<=a-1;d++){
        z+='*'
    }
    if(a<5-1){
        z+='\n'
    }
}
console.log(z)