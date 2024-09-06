const res = document.getElementById("idResultado");

document.querySelector("#btnSuma").addEventListener("click", (event) =>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    let suma = parseFloat(valor1) + parseFloat(valor2);
    console.log(suma);
    res.innerText = ""+suma;
});

document.querySelector("#btnResta").addEventListener("click", (event) =>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    let resta = parseFloat(valor1) - parseFloat(valor2);
    res.innerText = ""+resta;
});

document.querySelector("#btnMul").addEventListener("click", (event) =>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    let mul = parseFloat(valor1) * parseFloat(valor2);
    res.innerText = ""+mul;
});

document.querySelector("#btnDiv").addEventListener("click", (event) =>{
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    let div = parseFloat(valor1) / parseFloat(valor2);
    res.innerText = ""+div;
});