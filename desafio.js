const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

rl.question("Digite o Nome do seu Herói: ", function(nomeDoHeroi) {
    rl.question("Digite os pontos de EXP do Herói: ", function(exp) {
        let pontosDeExperiencia = parseFloat(exp);
        
        if (pontosDeExperiencia <= 1000) {
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[0]}`);

        } else if (pontosDeExperiencia > 1000 && pontosDeExperiencia < 2001) {
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[1]}`);

        } else if (pontosDeExperiencia > 2000 && pontosDeExperiencia < 5001) {
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[2]}`);
        
        } else if (pontosDeExperiencia > 5000 && pontosDeExperiencia < 7001){
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[3]}`);
        
        } else if (pontosDeExperiencia > 7000 && pontosDeExperiencia < 8001){
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[4]}`);
        
        } else if (pontosDeExperiencia > 8000 && pontosDeExperiencia < 9001){
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[5]}`);
        
        } else if (pontosDeExperiencia > 9000 && pontosDeExperiencia <= 10000){
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[6]}`);
        
        } else {
            console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${niveis[7]}`);
        }

        console.log("Boa sorte em sua aventura " + nomeDoHeroi + "!")

        rl.close();
    });
});
