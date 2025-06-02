function dataMaisAntiga(datas) {
    let maisAntigo=datas[0];
    for( const data of datas){
        if(data.getTime()<maisAntigo.getTime()){
            maisAntigo=data ;
        }
    }
    return maisAntigo;
}