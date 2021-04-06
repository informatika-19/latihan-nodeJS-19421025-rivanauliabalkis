//array

//const ListNilai = ['A', 'B', 'C']
//console.log(ListNilai[2])

const dataMahasiswa = [
    {
        nama: 'Rivan',
        npm: '19421025',
        prodi: 'informatika'
    },
    {
        nama: 'hatta tambunan',
        npm: '19421012',
        prodi: 'informatika'
    }
]

//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa) {
    console.log(dataMahasiswa[i].nama + ' - ' + dataMahasiswa[i].npm + ' - ' + dataMahasiswa[i].prodi)
}