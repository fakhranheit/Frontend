// var hari= new Date() 
// function harisekarang(){
//     var hariini=('Tanggal Hari ini '+hari)
//     return hariini
// }
// console.log(harisekarang())

function hari(){
    var hari=['minggu','senin','selasa','rabu','kamis','jumat','sabtu'] //var hari="minggu senin selasa rabu kamis jum'at sabtu".split(' ')
    var bulan=['januari','februari','maret','april','mei','juni','juli','agustus','september','oktober','november','desember']
    var Tanggal= new Date()

    var output=(hari[Tanggal.getDay()])+','+Tanggal.getDate()+' '+(bulan[Tanggal.getMonth()]+' '+Tanggal.getFullYear())
    return output
}
console.log(hari())