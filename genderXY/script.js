//DOM
var name;
var sex;
var p = document.createElement('p');
var ptext = document.createTextNode('Ciao ');
var span = document.createElement('span');
var text = document.createTextNode(getInfo());
span.appendChild(text);
p.appendChild(ptext);

p.appendChild(span);
document.body.appendChild(p);


//function
function getInfo(){
    name = prompt('inserisci il tuo nome');
    sex = (prompt('indica il sex M o F')).toUpperCase();
    return name
}


//condition
if(sex == "F"){
    document.querySelector('span').style.color = "pink"
} else { document.querySelector('span').style.color = "blue" }

