//tugas 1

let printOddNumber = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(`${i}`)
    }
  }
}

printOddNumber(15)

//tugas 2

let printPijarCamp = (num) => {
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('Pijar camp')
    } else if (i % 3 == 0) {
      console.log('pijar')
    } else if (i % 5 == 0) {
      console.log('camp')
    } else {
      console.log(i)
    }
  }
}

printPijarCamp(15)

//tugas 3

const hobi = ['Riding', 'Cosplay', 'Badminton']
const hobi2 = ['Renang', 'Bersepedah']

let combineArray = (hobi, hobi2) => {
  const join = [...hobi, ...hobi2]
  return join
}

let combinedArray = combineArray(hobi, hobi2)
console.log(combinedArray)

let mobil = {
  nama: 'Mazda',
  tipe: 'RX-7',
  tahun: 1992,
}

let mobil2 = {
  warna: 'hitam',
  mesin: 'sylinderR2',
}

let combineObjects = (mobil, mobil2) => {
  const gabung = { ...mobil, ...mobil2 }
  return gabung
}

let combinedObjects = combineObjects(mobil, mobil2)
console.log(combinedObjects)