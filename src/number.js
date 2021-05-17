function number() {
    var div = document.createElement('div');
    div.innerHTML = 1000;
    div.setAttribute('id', 'number');
    // div.onclick = function() {
    //     div.innerHTML = parseInt(div.innerHTML, 10) + 1;
    // }
    document.body.appendChild(div)
}

export default number;