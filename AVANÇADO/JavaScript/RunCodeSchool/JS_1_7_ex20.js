function formataData(data){
    return data.getMonth()+"-"+data.getDate()+"-"+data.getFullYear();
} function formataData(data){
    const mes= data.getMonth()+1;
    const dia= data.getDate();
    const anoDisplay= data.getFullYear();
    let diaDisplay;
    let mesDisplay;
    if(dia<10){
        diaDisplay="0"+dia;
    }else{
        diaDisplay=dia;
    }
    if(mes<10){
        mesDisplay="0"+(mes);
    }else{
        mesDisplay=mes;
    }
    return mesDisplay+"-"+diaDisplay+"-"+anoDisplay;
}