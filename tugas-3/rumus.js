console.log("kalkulator sederhana");
console.log("======================");
export function kalkulator(angka1, angka2, operasi){
    let hasil;
    switch(operasi){
        case 'Pengurangan':
            hasil = angka1 - angka2;
            break;
        case 'Pertambahan':
            hasil = angka1 + angka2;
            break;
        case 'Perkalian':
            hasil = angka1 * angka2;
            break;
        case 'Pembagian':
            hasil = angka1 / angka2;
            break;
        default:
            console.log('Operasi tidak dikenali');
            return;

    }
    return hasil;
    console.log(`angka 1 = ${angka1}`);
    console.log(`angka 2 = ${angka2}`);
    console.log(`Hasil ${operasi} dari angka ${angka1} dan ${angka2} adalah ${hasil}`);

} 
const angka1 = 2;
const angka2 = 5;
kalkulator(angka1, angka2, 'Pertambahan');
kalkulator(angka1, angka2, 'Pengurangan');
kalkulator(angka1, angka2, 'Perkalian');
kalkulator(angka1, angka2, 'Pembagian');