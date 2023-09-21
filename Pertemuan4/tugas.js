//soal 1


let storedObjects = {}


let join = (key, value) => {
    let gabung = { ...storedObjects, [key]: value }
    return gabung
}

let hasil = join('nama', 'dzaki')
console.log(hasil)

//soal 2

let printSquare = (num) => {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            document.write('*')
        }
        document.write('<br>')
    }
}
    
printSquare(20)

//soal 3 bagian A

let returnFirstName = (fullName) => {
    return fullName
}

let firstName = returnFirstName('dzaki mumtaz')
let result = firstName.split(' ', 1)
console.log(result)

//soal 3 bagian B

let returnDay = (clock) => {
    if (clock >= 5 && clock <= 12) {
        return 'pagi'
    } else if (clock >= 13 && clock <= 15) {
        return 'siang'
    } else if (clock >= 16 && clock <= 18) {
        return 'sore'
    } else if (clock >= 19 && clock <= 24 || clock >= 0 && clock <= 4) {
        return 'malam'
    }
}

let total = returnDay(2)
console.log(total)

