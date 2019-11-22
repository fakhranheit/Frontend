var onNamechange=()=>{ // //membuat variable yang memberi value kepada input nama
    if(document.getElementById('nama').value!==''){ // //jika nama telah diisi dengan sebuah value (string)
        document.getElementsById('h5')[0].innerHTML='Nama telah diisi' // //maka akan muncul tulisan seperti ini
    }
    else{ // //jika belum diisi
        document.getElementsByTagName('h5')[0].innerHTML='Harap diisi'
    }
}

const onBtnResclick=()=>{ // //buat sebuah function beserta properti dan parameternya hasil dari memencet button
    var nama = document.getElementById('nama').value // //mengambil value nama dari input id=nama
    var usia = document.getElementById('usia').value // //mengambil value nama dari input id=usia
    var kelamin = '' // //karena kelamin ada 2 opsi, buat variable awal kelamin dengan string kosong
    if (document.getElementsByName('sex')[0].checked){ // //jika yang di cek pilihan pertama
        kelamin = 'Pria'
    }
    else if (document.getElementsByName('sex')[1].checked){ // //jika yang di cek pilihan kedua
        kelamin = 'Wanita'
    }
    if (nama&&usia&&kelamin){ // //jika sudah mengisi semua atribut, akan memproses sebuah output akhir (tampil)
        document.getElementsByTagName('h5')[1].innerHTML=`Nama ${nama} <br> Usia ${usia} <br> ${kelamin}`
    }
    else{ // //jika belum mengisi semua atribut, tidak akan memproses sebuah output akhir (tampil). Lalu menampilkan sebuah notifikasi
        document.getElementsByTagName('h5')[1].innerHTML='Harap memasukan semua atribut'
    }
}