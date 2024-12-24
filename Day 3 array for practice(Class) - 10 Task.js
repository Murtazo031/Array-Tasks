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
//     if ((i+1) % b == 0){
//         sum += e
//     }
//    })
//    return sum
// }
// console.log( sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4));

// #6
//depth
// function depth (array){
//     let cnt = 0
//     for (let i = array ; i != undefined ; i = i[0]){
//         cnt++
//     }
//     return cnt
// }

// #7
// function numberBoom(a,b){
//   return  a.find((e)=>{
//       return e==b
//   })==b?"Boom":`there is no ${b} in the array`
// }
// console.log(numberBoom([1, 2, 3, 4, 5, 6], 6));

// #8
// function sumArraysSort(...arrays){
//   let sum = 0
//   let array = []
//   arrays.map((e)=> {
//     e.map((e)=>{
//       sum += e
//     })
//   })
// }

//#9
//factelement
// function factelement(a){
//     let array = []
//     a.map((e)=>{
//         let fact = 1
//         for ( let i = 1 ; i <= e ; i ++){
//           fact *= i
//         }
//         array.push(fact)
//     })
//     return array
// }

// #10
// function prime (a){
//     for (let i = 0 ; i < a.length ; i ++){ //9
//         for (let f = a[i]-1 ; f > 1 ; f--){ // 8 7 6 5 4 3
//             if (a[i] % f == 0){ // flase treu
//                 return false // false
//             }
//         }
//     }
//     return true
// }
// console.log(prime([2,9]));

// #11
//indexnum
// function indexnum(a,b){
//     let arr = []
//     a.forEach((e,index)=>{ //[0] [1]
//         e.forEach((e)=>{ // 1 2  1 2
//             if(e==b){ // false true false true
//                 arr.push(index) // arr[0,1]
//             }
//         })
//     })
//     return arr
// }
// console.log(indexnum([[1,2],[1,2]],2));

// #12
//indexequal
// function indexequal(a){
//     return a.every((e,i)=> e == i)
// }

// #13
// function random(n,min,max){
//     let arr = []
//     for (let i = 0 ; i < n ; i++){
//         arr.push( Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//     return arr
// }
// console.log(random(10,1,10));


// #14
//notlength
// function notlength(a){
//     let n = 0
//     a.map((e)=> n++)
//     return n
// }

// #15
//getAlphabetIndices
// function getAlphabetIndices(str) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let array = []
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i].toLowerCase()
//       for (let j = 0; j < alphabet.length; j++) {
//         if (char == alphabet[j]) {
//           array.push(j + 1)
//           break
//         }
//       }
//     }
//     return array
//   }
//   console.log(getAlphabetIndices("abc"));
  
