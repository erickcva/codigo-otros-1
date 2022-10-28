let res;
    document.getElementById('suma').addEventListener('click', () =>{
        const n1 = parseInt(document.getElementById('n1').value);
        const n2 = parseInt(document.getElementById('n2').value);
        res = n1 + n2;
        document.getElementById('res').innerHTML = res;
    });
    document.getElementById('resta').addEventListener('click', () =>{
        const n1 = parseInt(document.getElementById('n1').value);
        const n2 = parseInt(document.getElementById('n2').value);
        res = n1 - n2;
        document.getElementById('res').innerHTML = res;
    });
    document.getElementById('multiplicacion').addEventListener('click', () =>{
        const n1 = parseInt(document.getElementById('n1').value);
        const n2 = parseInt(document.getElementById('n2').value);
        res = n1 * n2;
        document.getElementById('res').innerHTML = res;
    });
    document.getElementById('division').addEventListener('click', () =>{
        const n1 = parseInt(document.getElementById('n1').value);
        const n2 = parseInt(document.getElementById('n2').value);
        res = n1 / n2;
        document.getElementById('res').innerHTML = res;
    });