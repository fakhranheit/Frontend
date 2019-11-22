const cekkoin = (koin) => {
    // var uang = [25,10,5,1]
    var dualima = 0
    var sepuluh = 0
    var lima = 0
    var satu = 0
    // var tukeran = koin
    var hasil = 0

    if(koin < 1){
        return 'gak ada duitnya'
    }
    
    while (koin >= 25) {
        koin-=25
        dualima+=1
    }
    while (koin >= 10 && koin < 25) {
        koin-=10
        sepuluh+=1
    }
    while (koin >=5 && koin < 10) {
        koin-=5
        lima+=1
    }
    while (koin >0 && koin < 5) {
        koin-=1
        satu+=1
    }
   
    hasil = dualima+sepuluh+lima+satu
    return hasil
}


console.log(cekkoin(50)) //7
