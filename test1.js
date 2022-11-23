let a = document.getElementById("newtodo")

for(let i = 0 ;i<=localStorage.length-1 ; i++){
    let ar = localStorage.key(i);
    let node = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td1data = document.createTextNode(localStorage.key(i));
    let td2data = document.createTextNode(localStorage.getItem(ar));
    td1.appendChild(td1data);
    td2.appendChild(td2data);
    node.appendChild(td1);
    node.appendChild(td2);
    a.appendChild(node);
}
