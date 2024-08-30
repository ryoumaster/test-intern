const faturamento = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.88,
    es: 27165.48,
    outros: 19849.53
}
let mensal = 0;
for(const estado in faturamento){
    mensal = mensal + faturamento[estado];
}

for(const estado in faturamento){
    const percent = (faturamento[estado]/mensal) * 100
    console.log(`Percentual ${estado}: ${percent.toFixed(2)}%`)
}
console.log(`Média mensal: R$${mensal}`)