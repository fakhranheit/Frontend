const petals=(kelopak)=>{
    var kembang=['i love you','a little','a lot','passionately','madly','not at all']
    return kembang[(kelopak-1)%kembang.length]
}
console.log(petals(5))

