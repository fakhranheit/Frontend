// var orang ={
//     namaDpn:'Andi',
//     usia:50,
//     pekerjaan:'Politisi',
//     namaFull: function(){
//         return this.namaDpn+" "+"Karno"
//     }
    
// }

// var Andi= new Object()
// Andi.namadpn='Andi'
// Andi.namablk='bambang'
// Andi.usia=24
// Andi.pekerjaan='PNS'

// console.log(Andi)
function orang(nama, usia, job) {      
    this.namaDpn = nama     
    this.umur = usia      
    this.pekerjaan = job 
    } 
 
var Andi = new orang('Andi', 30, 'PNS')
var Fak=new orang('fakhran',23,'pengacara')
console.log(Andi.namaDpn+Fak.namaDpn) 