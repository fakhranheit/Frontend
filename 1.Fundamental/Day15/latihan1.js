const penduduk=(awal,persen,pendatang,target)=>{
    var tahun=0
    var penduduk=awal
  do{
    penduduk+=(penduduk*(persen/100))+pendatang
    tahun++
  }
  while(penduduk<target)
  return tahun+' tahun'
}
console.log(penduduk(2000,5,50,3000))