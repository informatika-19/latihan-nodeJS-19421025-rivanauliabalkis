//funcition
function hitungNilai (nilai1, nilai2) {
    return nilai1 + nilai2
}

const hasil = hitungNilai(14, 8)

//console.log(hasil)

const buatNasi = (beras ,  air) => {
if (beras) {
    console.log('beras ok')
}else {
    console.log('mohon masukan beras')
    }

if (air) {
        console.log('Air ok')
}else {
        console.log('mohon masukan Air')
    }
}

buatNasi(beras)