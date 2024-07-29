
const students = [
    { name: 'Alice', scores: [95, 85, 90] },
    { name: 'Bob', scores: [70, 75, 80] },
    { name: 'Charlie', scores: [88, 92, 85] },
    { name: 'David', scores: [60, 65, 70] },
    { name: 'Eve', scores: [98, 100, 95] }
  ];

  let x = students.map((s) => {
    let avg = 0
    s.scores.map((e) => {
        avg += e
    })
    avg = avg/3
    return {
        Name: s.name,
        Average: avg
    }
  })
  console.log("ll", x);

  
