const cekkoin = (koin) => {
    // var uang = [25,10,5,1]
    var dualima = 0
    var sepuluh = 0
    var lima = 0
    var satu = 0
    var tukeran = koin
    var hasil = 0

    while (tukeran >= 25) {
        tukeran-=25
        dualima+=1
    }
    while (tukeran >= 10 && tukeran < 25) {
        tukeran-=10
        sepuluh+=1
    }
    while (tukeran >=5 && tukeran < 10) {
        tukeran-=5
        lima+=1
    }
    while (tukeran >0 && tukeran < 5) {
        tukeran-=1
        satu+=1
    }
    if(koin < 1){
        return 'gak ada duitnya'
    }
    hasil = dualima+sepuluh+lima+satu
    return hasil
}


console.log(cekkoin(49)) //7
console.log(cekkoin(31)) //3
console.log(cekkoin(50)) //2