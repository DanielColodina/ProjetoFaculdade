

for (i = 1; i < 6; i++){

    const matNota = prompt ("Digite o nome da "+i+" materia ?");
    const notaN1 = prompt("Digite a nota da sua n1");
    const notaN2 = prompt("Digite a nota da sua n2");

    const media = (notaN1 + notaN2)/2;
    if (media >= 6){
        console.log("Aluno está aprovado nota da N1 e N2"+ notaN1, notaN2);
    }else{
        console.log("Aluno reprovado com nota N1 e N2"+ notaN1, notaN2);
    }
};