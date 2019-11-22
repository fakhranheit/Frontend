var tanggal=''
var bulan1=['jaunari','febuari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember']
var tahun=''
var bulan=''
const tgl=(a)=>{
    var str=a.split('')
    for(i=0;i<str.length;i++){
        if(i>=0&&i<2){
            tanggal+=str[i]
        }
        if(i>=2&&i<4){
            bulan+=str[i]
            bulan=parseInt(bulan)
        }
        if (i>=4){
            tahun+=a[i]
        }
        }
        bulan=bulan-1
    
        for(i=0;i<bulan1.length;i++){
            if(i==bulan){
            bulan=bulan1[i]
            }
        }

    return `tanggal ${tanggal} ${bulan} ${tahun}`
}
console.log(tgl('21022019'))


