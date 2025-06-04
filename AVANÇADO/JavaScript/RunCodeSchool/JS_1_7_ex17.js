function adicionaSemanas(data, semanas) {
    const dataMS=data.getTime();
    const semanasMS=semanas*604800000;
    const totalMS= dataMS+semanasMS
    const dataMaisSemanas = new Date(totalMS);
    return dataMaisSemanas;
}