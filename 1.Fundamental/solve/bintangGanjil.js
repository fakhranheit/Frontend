let z = "";
for (a = 0; a < 10; a++) {
  //10 adalah jumlah tingkat segitiga
  for (b = a; b <= 10 - 1; b++) {
    z += " ";
  }
  for (c = 0; c <= a; c++) {
    z += "*";
  }
  for (d = 0; d <= a - 1; d++) {
    z += "*";
  }
  if (a < 10 - 1) {
    z += "\n";
  }
}
console.log(z);
