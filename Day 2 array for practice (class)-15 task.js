// #1
// function mergeArrays(...arrays){
//    return arrays.reduce((acc,curr) => acc.concat(curr),[])
// }
// console.log(mergeArrays([15, 4], [2, 3],[5,7]));

// #2
// function findIndex(a,b){
//     return a.indexOf(a.find((e,i,ar)=>{
//         return e == b
//     }))
// }
// console.log(findIndex([1,2,3,4],2));

// #3
// function removeDuplicates(array) {
//     return array.filter((element, index) => array.indexOf(element) == index)
//   }
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))

// #4
// function removeNegatives(array) {
//   return array.filter((element, index) => {
//     return element > 0;
//   });
// }
// console.log(removeNegatives([1, 2, 3, 4, 5, -6]));

// #5
// function calculateAverage(array){
//    let cnt = array.reduce((acc,currval)=>{
//     return acc += currval
//    },0)
//    return cnt / array.length
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));

// #6
// function isPalindromeArray(array) {
//     const reversedArray = [...array].reverse();
//     return array.every((elem, index) => {
//         return elem == reversedArray[index]
// });
//   }
// console.log(isPalindromeArray([1,2,3,2,1]));

//#7
// function arrBetween(a,b,c){
//     return c.filter ((element)=> element >= a && element <= b)
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));

// //#8
// function sumArray (a){
//     return a.map((e,i,ar)=> )
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// #9
// function arrayValuesTypes(a){
//     return a.map((e)=>{
//         return a = typeof e
//     })    
// }
// console.log( arrayValuesTypes([1, 2, "null", []]));

// #10
// function wordLengths(a){
//     return a.map((e)=>{
//         return a = e.length
//     })
// }
// console.log( wordLengths(["hello", "world"]));

// #11
// function checkSquareAndCube(a){
//     return Math.sqrt(a[0])==Math.cbrt(a[1])
// }
// console.log( checkSquareAndCube([3, 8]));

// #12
// function invertArray(a){
//     return a.map((e)=> e * (-1))
// }
// console.log( invertArray([-1, 2, 3, 4, 5])
// );

//#13
// function getMultipliedArr(a){
//     return a.map((e)=> e * 2)
// }
// console.log( getMultipliedArr([-1, 2, 3, 4, 5])
// );

// #14
// function sumFive(a){
//     let sum = 0
//     a.map((e)=>{
//         if (e > 5){
//             sum += e
//         }
//     })
//     return sum
// }
// console.log( sumFive([1, 5, 20, 30, 4, 9, 18]) );

// #15
// function filterArray(a){
//     return a.filter((e)=> typeof e == "number")
// }
// console.log( filterArray([1, 2, 3, "a", "b", 4]));



