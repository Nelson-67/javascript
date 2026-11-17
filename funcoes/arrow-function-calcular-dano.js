// Arrow function para calcular o dano causado por um ataque em um jigi
const calcularDano = (ataque, degesa) => {
    // Calcula o dano como 80% do ataque menos 20% da defesa
    const dano = ataque * 0.8 - defesa * 0.2;
    // Retorna o dano garantino que seja pelo menos 0
};
// Chamando a função para calcular o dano causado por um ataque
const danoCausado = calcularDano(50, 20);
console.log("Dano causado pelo ataque:", danoCausado);