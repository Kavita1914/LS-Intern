// const students = [
//     { name: 'Alice', scores: [95, 85, 90] },
//     { name: 'Bob', scores: [70, 75, 80] },
//     { name: 'Charlie', scores: [88, 92, 85] },
//     { name: 'David', scores: [60, 65, 70] },
//     { name: 'Eve', scores: [98, 100, 95] }
//   ];
  
//   1. Calculate the average score for each student
//   2. Find the student with the highest average score
//   3. Filter out the students who have an average score below 80


  const students = [
    { name: 'Alice', scores: [95, 85, 90] },
    { name: 'Bob', scores: [70, 75, 80] },
    { name: 'Charlie', scores: [88, 92, 85] },
    { name: 'David', scores: [60, 65, 70] },
    { name: 'Eve', scores: [98, 100, 95] }
  ];

  // average score for each student

  let allScores = students.map(getScores)
  let scoreArray = allScores.flat(1)
  let average=[], firstArray

  function getScores(a) {
  return[a.scores]
  }
 let newObj = {}
 for(let i=0; i<5; i++) {
  firstArray = scoreArray[i]
  average[i] = (firstArray[0] + firstArray[1] + firstArray[2] ) / 3
  newObj = { Name:students[i].name, Average:average[i] };
  console.log( newObj );
}

// student with the highest average score

let highestAverage = -1
average.forEach(e => {
  if ( e > highestAverage ) {
    highestAverage = e
  }
})
console.log("Highest Average Score : ", highestAverage);


// students who have an average score below 80

console.log("Below 80 : ", average.filter(below));

function below(x) {
  return x < 80
}

