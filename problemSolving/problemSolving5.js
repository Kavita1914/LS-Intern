// const array = [[1, 2, 3], [4, 5], [6], [7, 8, 9]];
// let newArray = array.reduce((acc, curr) => {
//   if (Array.isArray(curr)) {
//     acc.push(...curr)
//   }
//   else {
//     acc.push(curr)
//   }

//   return acc;
// }, []);
// console.log(newArray);

const numbers = [[1,2],[[3,4,5]],[6],[7, 8, 9]];
function flattenArray(num) {
let newNumbers = num.reduce((acc, curr) => {
    if ( Array.isArray(curr)) {
        acc.push(...flattenArray(curr))
        console.log("llll", ...flattenArray(curr));
    }
    else {
        acc.push(curr)
    }
    return acc
},[])
return newNumbers

}
console.log(flattenArray(numbers));