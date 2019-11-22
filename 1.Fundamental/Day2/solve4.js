var a = 485
var tahun=Math.floor(a/360)
a=a%360
var bulan=Math.floor(a/30)
a=a%30
console.log(tahun+' tahun '+bulan+' bulan '+a+' hari ')