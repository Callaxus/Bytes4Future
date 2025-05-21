function getZodiacSign(dia, mes) {
    // Each sign starts on this day of the year (non-leap year)
    const zodiac = [
        { name: "Capricórnio", start: 1 },    // Jan 1
        { name: "Aquário", start: 20 },       // Jan 20
        { name: "Peixes", start: 50 },        // Feb 19
        { name: "Carneiro", start: 80 },      // Mar 21
        { name: "Touro", start: 111 },        // Apr 21
        { name: "Gémeos", start: 142 },       // May 21
        { name: "Caranguejo", start: 173 },   // Jun 22
        { name: "Leão", start: 204 },         // Jul 23
        { name: "Virgem", start: 235 },       // Aug 23
        { name: "Balança", start: 266 },      // Sep 23
        { name: "Escorpião", start: 296 },    // Oct 23
        { name: "Sagitário", start: 326 },    // Nov 22
        { name: "Capricórnio", start: 356 }   // Dec 22 (wraps around)
    ];
    const acumulado = [0,31,59,90,120,151,181,212,243,273,304,334];
    if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
    if (dia < 1 || dia > [31,28,31,30,31,30,31,31,30,31,30,31][mes-1])
        return `Por favor introduza um dia entre 1 e ${[31,28,31,30,31,30,31,31,30,31,30,31][mes-1]}.`;
    const dayOfYear = acumulado[mes-1] + dia;
    for (let i = zodiac.length - 1; i >= 0; i--) {
        if (dayOfYear >= zodiac[i].start) return zodiac[i].name;
    }
    return zodiac[0].name; // For days before Jan 20
}