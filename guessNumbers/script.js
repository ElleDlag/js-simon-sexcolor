var randArr =[];
var userArr = [];
var resArr = [];
var x = 0
while (randArr.length <5){
    var n = nRand()
    if(chkDouble(randArr, n)){
        randArr.push(n);
    }
    x++;
}

if (confirm(randArr)) {
    setTimeout( getArr, 1000*5); //1000*30 = 30s
};
function getArr() {

    while (userArr.length < 5){
        var req = parseInt(prompt('inserisci un numero'));
        console.log()
        if(!isNaN(req)) {
            userArr.push(req);
            x++;
        }
    }
    matchArr()
    return userArr;
}
function matchArr(){

    userArr.forEach((el,i) => {
        if(!(chkDouble(randArr, el))){
            if(resArr.length>0){
                if(chkDouble(resArr, el)){
                    resArr.push(el)
                }
            } else {
                resArr.push(el)
            } 
        }        
    });

    console.log("numeri genrati dal pc:" + randArr)
    console.log("numeri inseriti da user:" + userArr)
    console.log("numeri che matchano esclusi i doppi: " + resArr)
    alert('ne hai indovinati: ' + resArr.length)
}


