function allowLoginRequest(){
    let min = 1, max = 1000000;
    let x = Math.floor(Math.random()*(max-min+1)+min);

    if( (x % 2) === 0 ){
        process.send(true);
    }else
        process.send(false);
}

process.on( 'message', function(m){
    allowLoginRequest();
})