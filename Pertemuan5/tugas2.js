//soal2

let greeting = (clock, fullName, functionReturnFirstName, functionReturnDay ) => {

    if (clock >= 5 && clock <= 12) {
        console.log(`selamat pagi ${fullName}`)
    } else if (clock >= 13 && clock <= 15) {
        console.log(`selamat siang ${fullName}`)
    } else if (clock >= 16 && clock <= 18) {
        console.log(`selamat sore ${fullName}`)
    } else if (clock >= 19 && clock <= 24 || clock >= 0 && clock <= 4) {
        console.log(`selamat malam ${fullName}`)
    }
}

greeting(3, 'dzaki')