function gajian(masuk,keluar,posisi)
{
// if (keluar<masuk)
//     {
//         keluar+=12
//     }
if (posisi=='staff')
{
    var gaji=2000*(keluar-masuk)
}
else if (posisi=='ceo')
{
    var gaji=1000*(keluar-masuk)
}
else if (posisi=='manager')
{
    var gaji=700*(keluar-masuk)
}
return gaji
}
console.log('gaji anda '+gajian(1,8,'staff'))






