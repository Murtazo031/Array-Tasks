// #1
// function inclusiveArray (a,b){
//     let arr = []
//     if ( a > b) {
//         arr.push(a)
//     }
//     else {
//     for (let i = a ; i <=b ; i++){
//         arr.push(i)
//     }}
//     return arr
// }
// console.log(inclusiveArray(10,20));

// #2
// function isumOddAndEven (a){
//     let even =0
//     let Odd = 0
//     let arr = []
//     a.forEach((e)=> e % 2 == 0 ? even += e  : Odd += e)
//     return arr.concat(even,Odd)
// }
// console.log(isumOddAndEven([-1, -2, -3, -4, -5, -6]));

// #3
// function flattenCurve (a){
//     let n = 0
//     let sum = 0
//     let answer = []
//     a.reduce((ac,vl)=> {
//         sum += vl
//         n ++  
// },0)
//   for ( let i = 0 ; i < a.at(-1) ; i ++){
//     answer.push(sum/n)
//   }
//    return answer 
// }
// console.log(flattenCurve([1,2,3,4,5]));

// 4#
// function squarePatch(a){
//     const arrays = []
//     const array = []
//     for (let i = 0 ; i < a ; i ++){
//         arrays.push(a)
//     }
//     for (let i = 0 ; i < a ; i ++){
//         array.push(arrays)
//     }
//     return array
    
// }
// console.log(squarePatch(3));

// #5
// function sumEveryNth (a,b){
//    let sum = 0
//    a.forEach((e,i)=>{
//     if (i % b == 0){
//         sum += e
//     }
//    })
//    return sum
// }
// console.log( sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1));


// #6


// #7
function numberBoom(a,b){
   return a.find((e,i,ar)=>{
     return b == e ?"Boom" :"a,balc" 
   })

}
console.log( numberBoom([1, 2, 3, 4, 5, 6, 7], 7));
