import { kalkulator } from './rumus.js';
import readline from 'readline';

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== KALKULATOR ===");

inputUser.question('Masukkan angka pertama: ', (angka1) => {
    inputUser.question('Masukkan angka kedua: ', (angka2) => {
        console.log("Pilih: Pertambahan | Pengurangan | Perkalian | Pembagian");
        inputUser.question('Operasi apa yang mau dipakai? ', (operator) => {
            
            const hasil = kalkulator(parseFloat(angka1), parseFloat(angka2), operator);
            
            console.log("\n============================");
            console.log(`HASIL: ${hasil}`);
            console.log("============================\n");

            inputUser.close();
        });
    });
});