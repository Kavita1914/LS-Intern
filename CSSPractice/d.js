let array = [ "red", "green", "blue", "yellow"]
let temp = array[3]
array[0] = array[3]
array[1] = array[2]
array[2] = array[3]
array[3] = temp
console.log(array)