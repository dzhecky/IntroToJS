//soal 3

let printTriangleWithNumber = (num) => {
    for (i = 1; i <= num; i++) {
      for (j = 1; j <= i; j++) {
        document.write(j)
      }
      document.write('<br>')
    }
  }
  
  printTriangleWithNumber(10)
  