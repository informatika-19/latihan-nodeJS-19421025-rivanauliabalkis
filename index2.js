const nilai = 8
let nilaiHuruf, ket

if (nilai >= 85) {
    nilaiHuruf ='A'
    ket = 'SANGAT BAIK'
}else if(nilai >= 75) {
    nilaiHuruf ='B'
    ket = 'BAIK'
}else if(nilai >= 65) {
    nilaiHuruf ='C'
    ket = 'CUKUP'
}else if(nilai >= 55) {
    nilaiHuruf ='D'
    ket = 'BURUK'  
}else{
    nilaiHuruf ='E'
    ket = 'SANGAT BURUK'

}

console.log('nilai anda') ' + nilaiHuruf + '  (' + ket + ')') 