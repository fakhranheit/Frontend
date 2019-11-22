// const coba=(a,b)=>{
//     var jumlah= a*b
//     return jumlah
// }
// console.log(coba(2,3))

class Coba{
    constructor(a,b,c){
    this.nama=a
    this.kelas=b
    this.usia=c
    }
}
var listdata=[
    new Coba('fakhran','1','22'),
    new Coba('wahyu','3','21'),
    new Coba('firdaus','6','16'),
    new Coba('dablek','20','20')
]

// listdata.splice(0,1,'bujang','10','80')
listdata.forEach(element => {
    listdata.push(new Coba('liverpool','8','6'))
    
});
console.log(listdata)
