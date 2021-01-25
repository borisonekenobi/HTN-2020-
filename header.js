function loadHeader() {
    let btn = document.createElement("button");
    let t = document.createTextNode(list[i][1]["Username"]);
    btn.appendChild(t);
    document.getElementById('header').appendChild(btn);
}