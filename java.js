function contar(){
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let resultado = document.getElementById('result');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = "<p>Todos os Valores devem ser positivos!<p>"
    }
    else{
        resultado.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let c = i; c<=f; c+=p){
            resultado.innerHTML += `  ${c}`
        }
    }
}