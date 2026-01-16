 function calcular(){
    // Valores Iniciais
    let valor = parseFloat(document.getElementById('input-value').value); 
    let taxa = document.getElementById('input-rate').value;

    if(isNaN(valor)){
        alert('Por favor preencha os campos!');
        return
    }

    let gorjeta = 0;

    if(taxa === '01'){
        gorjeta = valor * 0.10;
    }else if(taxa === '02'){
        gorjeta = valor * 0.08;
    }else if(taxa === '03'){
        gorjeta = valor * 0.05;
    }else if(taxa === '04'){
        gorjeta = valor * 0.02;
    }

    let total = gorjeta + valor;

    document.getElementById('rate-result').value = ` R$ ${gorjeta.toFixed(2)}`;
    document.getElementById('total-result').value = `R$ ${total.toFixed(2)}`;

 }