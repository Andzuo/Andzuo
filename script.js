let xpUser = 10000
const name = "Anderson"
let levelUser = ""

if (xpUser < 1000) {
    levelUser = "Ferro"
} else if (xpUser >= 1001 && xpUser <= 2000) {
    levelUser = "Bronze"
} else if (xpUser >= 2001 && xpUser <= 5000) {
    levelUser = "Prata"
} else if (xpUser >= 6001 && xpUser <= 7000) {
    levelUser = "Ouro"
} else if (xpUser >= 7001 && xpUser <= 8000) {
    levelUser = "Platina"
} else if (xpUser >= 8001 && xpUser <= 9000) {
    levelUser = "Ascendente"
} else if (xpUser >= 9001 && xpUser <= 10000) {
    levelUser = "Imortal"
} else if (xpUser >= 10001 ) {
    levelUser = "Radiante"
};

console.log("O Heroi de nome: "+ name +", Está no nível de: " + levelUser)