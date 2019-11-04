function nRand(){
    return Math.floor(Math.random()*10+1)
}

function chkDouble(thisArr, num){
    if(thisArr.indexOf(num)>=0){
        return false
    } else { 
        return true 
    }
}