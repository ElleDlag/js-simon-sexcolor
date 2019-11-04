//variabili globale
var dom = document;

var elem = {
    getElem:  (el) => {
        catchEl = dom.querySelector(el);
        return catchEl
    },
    getElemAr: (el)=> {
        catchElAr = dom.querySelectorAll(el);
        return catchElAr
    },
    newElem: (type) => {
        newEl = dom.createElement(type);
        return newEl
    },
    classElem: (type,clsName) => {
        this.newElem(type).className = clsName ;
    },
    addElem(el, type, clsName) {
        this.getElem(el);
        this.newElem(type);
        catchEl.appendChild(newEl)
    }
}











