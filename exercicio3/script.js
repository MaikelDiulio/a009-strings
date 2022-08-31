const frase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(frase1)

const novaFrase1 = frase1.replace("verde", "rosa")

console.log(novaFrase1)

const novafrase2 = novaFrase1.replace("azul", "laranja")

console.log(novafrase2)

console.log(novafrase2.includes("verde"))
console.log(novafrase2.includes("laranja"))

console.log(novafrase2.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATOS SAIR"))