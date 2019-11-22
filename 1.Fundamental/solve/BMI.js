// const BMI=(weight,height)=>{
//     var bmi=weight/(Math.pow(height,2))
//     if(bmi<=18.5)
//         {
//             return 'Underweight'
//         }
//     else if(bmi>18.5&&bmi<=25.0){
//             return 'Normal'
//     }
//     else if(bmi>25.0&&bmi<=30){
//             return 'Overweight'
//     }
//     else if(bmi>30){
//             return 'Obese'
//     }
// }
// console.log(BMI(72,170))

function reverse(str){
     return str.split("").reverse().join("");
      
}
console.log(reverse('world'))