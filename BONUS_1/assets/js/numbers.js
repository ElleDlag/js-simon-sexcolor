var tris = {
    'row':[],
    'getSqrt': (cell)=>{
        console.log(Math.sqrt(cell.length))
        return Math.sqrt(cell.length)
    },
    'checkSign': (arr,sign) =>{
        var bool = arr.every(el=>{
            return el == sign
        })
        return bool
    },

    'fillArr': (y,z,n) =>{
    var arr = [];
        for(var x = 0; x < row; x++){
            console.log('Questo K vale' + k)
            
            
            if(y != null){
                /* console.log('Questa N vale' + n)
                console.log('Questa Y vale' + y)
                k=y;
                k = (k+z)*n;
                console.log('Questa K vale' + k)
                n++; */
                
                /* console.log(y)
                console.log(k)
                console.log(z) */
                    y++
                    k= k+z
                    console.log(k)
                    arr.push(cells[k].textContent);
                    k=0
                    k = (n*y)+z;
                    
                
                
                

            }else{
                arr.push(cells[k].textContent);
                k++
            }
            
            console.log(arr)
        }
        return arr
    },

    'checkRow': (s1,s2) =>{
        k=0;
        console.log("il mio valore di row è:" + row)

        for(var i = 1; i <= row; i++){
            console.log('mia row = ' + i)
            myArr = getArr(null,0,0)
          
            var checkA = check(myArr,s1);
            var checkB = check(myArr,s2);

            if(checkA || checkB){
                var msg = checkA ? "vince giocatore A" : "vince giocatore B"
                console.log(msg)
                arr = []
                return true
            } else { arr = [] }
        } 

    },
    'checkCol': (s1,s2) =>{
        
        console.log("il mio valore di row è:" + row)
        for(var i = 1; i <= row; i++){
            console.log('\r\n\r\nmia row = ' + i)
            k=0;
            myArr = getArr(0,i-1,3)
            var checkA = check(myArr,s1);
            var checkB = check(myArr,s2);

            if(checkA || checkB){
                var msg = checkA ? "vince giocatore A" : "vince giocatore B"
                console.log(msg)
                arr = []
                //return true
            } else { arr = [] }
        } 

    }
}