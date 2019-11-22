// opearator(2,3,'tambah/kurang/bagi/kali')

function opearator(a,b,c){
    if(c=='tambah')
    {
        c=a+b
        return c
    }
    else if (c=='kurang')
    {
        c=a-b
        return c
    }
    else if (c=='kali')
    {
        c=a*b
        return c
    }
    else (c=='bagi')
    {
        c=a/b
        return c
    }

}
console.log(opearator(80,2,'bagi'))
console.log(opearator(7,5,'kurang'))
