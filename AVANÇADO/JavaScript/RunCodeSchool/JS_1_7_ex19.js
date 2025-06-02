function subtraiHoras(data, horas) {
    const dataMS=data.getTime();
    const horasMS=horas*60*60*1000;
    const dataSubHorasMS=dataMS-horasMS;
    const dataNova= new Date(dataSubHorasMS);
    return dataNova;
}