// function multipleOfIndex(array) {

//   var output=array.filter((array,index)=>array%index==0 )
//   return output
// }
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
// // [-6, 32, 25]


// function sumOfDifferences(arr) {
  
//   var points = [1,2,10];
//   x=points.sort(function(a, b){return b-a});
//   console.log(x)
  

// }
function sumOfDifferences(arr) {
  var hasil=0
  var x=arr.sort((a, b)=>b-a);
  for(i=0;i<arr.length-1;i++){
    hasil+=x[i]-x[i+1]
  }
  return hasil
} 
console.log(sumOfDifferences([1,2,10,12]))//[12,10,2,1]