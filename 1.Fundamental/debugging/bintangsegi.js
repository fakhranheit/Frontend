// for (var i=1;i<=5;i++){
//   for (var j=i;j<=5;j++){
//       console.log(" ");
//   }
//   for (var k=1;k<=i;k++){
//       console.log("*");
//   }
//   for (var l=1;l<=i-1;l++){
//       console.log("*");
//   }
//   console.log("\n");
// }

//segitiga sama kaki

    let z = '';
    for (a = 0; a < 10; a++) {              //10 adalah jumlah tingkat segitiga
        for (b = a; b <= 10 - 1; b++) {
            z += ' ';
        }
        for (c = 0; c <= a; c++) {
            z += '*';
        }
        for (d = 0; d <= a - 1; d++) {
            z += '*';
        }
        if (a < 10 - 1) {
            z += '\n';
        }
    }
    console.log(z);
  

  