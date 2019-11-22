let sharp = "#"
let star = "*";
let hasil = " ";
let num = 8;
for (let i = 0; i < num; i++) // buat vertikal
{

    for (let j = 0; j < num; j++) // buat horizontal
    {
        if (i % 2 == 1) // setiap i ketemu bilangan ganjil
        {
            if (j % 2 == 0) { // setiap j ketemu bilangan genap
                hasil = hasil + sharp; // cetak pagar '#'
            }
            else // setiap j ketemu bilangan ganjil
            {
                hasil = hasil + star; // cetak bintang '*'
            }
        }
        else // setiap i ketemu bilangan genap polanya di ganti
        {
            if (j % 2 == 0) { // setiap j ketemu bilangan genap
                hasil = hasil + star; // cetak pagar '#'
            }
            else // setiap j ketemu bilangan ganjil
            {
                hasil = hasil + sharp; // cetak bintang '*'
            }
        }
    }
    hasil = hasil + " \n "; // tambah enter setiap selesai satu baris
    console.log(hasil); // cetak hasil setiap satu baris ke html_
    hasil = " "; // refresh wadah pola
}