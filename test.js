
var a2 = document.getElementById("sub")

function getvalue(e){
    let a = document.getElementById("inpu1");
    let b = document.getElementById("inpu2");
    localStorage.setItem(a.value , b.value);   
}


a2.addEventListener(onclick , getvalue);

let a = document.getElementById("gettodos1");

function newfunc(event){
    document.getElementById("removal").hidden = false;
}
function removintodo(event){
    let a1 = document.getElementById("removingtodo");
    localStorage.removeItem(a1.value);
}

