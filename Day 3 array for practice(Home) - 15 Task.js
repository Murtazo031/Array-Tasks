// #1
// function kub (a){
//     return a.reduce((acc,curr)=> acc += Math.pow(curr,3), 0)
// }
// console.log(kub([1, 5, 9]));

// #2
// function compact (a){
//       return a.filter((e,i,ar)=> e)
// }
// console.log(compact([null, 0, 1, 2, 3, null]) );

// #3
// function allTruthy (...a){
//     let prev = a[0]
//     let ans = false
//     a.forEach((e)=>{
//         if (prev == e){
//             ans = true
//             prev = e
//         }
//         else {
//             ans = false
//             prev = e
//         }
//     })   
//     return ans 
// }
// console.log(allTruthy(true, true, true));

// #4
// function evanLast (a){
//     let sum = 0
//     a.forEach((e,i,ar)=>{
//         if (i % 2 == 0){
//            sum += e
//         }
//     })    
//     return sum * a.at(-1)
// }
// console.log(evanLast([2, 3, 4, 5]));

// #5
// function isEqual(a,b) {
//     let answer = true
//     a.forEach((e,i)=>{
//         if (e != b[i]){
//             answer = false
//         }
//     })
//     return answer 
// } 
// console.log( isEqual([2, 5, 4, 5], [2, 3, 4, 5]));

// #6
// function compoundArray(a,b){
//     let answer =[]
//     if (a.length > b.length) answer = a.reduce((acc,curr,curin,)=> acc.concat( curr , b[curin]),[])
//     else if (a.length < b.length) answer = b.reduce((acc,curr,curin,)=> acc.concat( curr , a[curin]),[])
//    return answer.filter((el)=>el)
// }
// console.log(compoundArray([1, 2, 3], [5, 6, 7, 8]));

// #7
// function multiplicationTable(num){
//     let arr1 = []
//     let arr2 = []
//     for ( let i = 1 ; i <= num ; i++){
//         arr1.push(i)
//     }
//     for ( let i = 1 ; i <= num ; i++){
//         arr2.push(arr1.map((el)=> el * i))
//     }
//     return arr2

// }
// console.log(multiplicationTable(3));

// #8
// function findUniqueNumbers (a){
//     return a.filter(ele => a.indexOf(ele) == a.lastIndexOf(ele))   
// }
// console.log( findUniqueNumbers([1,2,3,4,5,2,4,5]));

// #9
// function formatPhoneNumber (a){
//     let str = ""
//     for (let i = 0 ; i < a.length ; i ++ ){
//         if (i == 0){
//         str = "("+a[i]
//         }
//         else if (i > 0 && i != 2){
//             str += a[i]
//         }
//         else if (i == 2){

//             str +=a[i]+") "
//         }
//         if ( i == 5){
//             str += "-"
//         }
//     }
//     return str
// }
// console.log( formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));

// #10
// function getTotalVolume(...array) {
//     console.log(array);
    
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//       let answer = 1
//       for (let j = 0; j < array[i].length; j++) {
//         answer *= array[i][j]
//       }
//       sum += answer;
//     }
//     return sum;
//   }
// console.log( getTotalVolume([2, 2, 2], [2, 1, 1]));



  