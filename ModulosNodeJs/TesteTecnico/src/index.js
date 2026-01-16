const inquirer = require('inquirer')
const { default: InputPrompt } = require('inquirer/lib/prompts/input')
const { type } = require('os')
const prompt = inquirer.createPromptModule()
const InputPrompt = inquirer.InputPrompt()

console.log('---------------------------------------------------------')
console.log('-------------Seja bem-Vindo ao banco do Itaú-------------')
console.log('---------------------------------------------------------')
        
    async function menu() {
        
    //colocar dentro do parametro 
    const respostas = await prompt([
        {
            type: 'input', //Receber dados do usuario 
            name:'nome: ', //Variavelque ira receber o valor do input 
            message: 'Qual o seu nome: '
        },
        {
            type: 'input',
            name: 'Banco',
            message: 'Você tem conta neste banco s/n ? ' 
        },
        {
                    type: 'list',
                    name: 'Saques',
                    message: 'O que você deseja fazer ?',
                    choices: ['Retirada', 'Saque', 'Saldo Atual']
                }

    ])
    
        if (respostas.Saques === 'Retirada'){
            const ValorRetirada =  await inquirer.prompt([
                {
                    type: 'Input',
                    name: 'ValorRetirada',
                    message: 'Qual o valor que deseja retirar ?',
                }
            ])
        }else if(respostas.Saques === 'Saque'){
            const ValorSaque = await inquirer.prompt([
                {
                    type: 'Input',
                    name: 'ValorSaque',
                    message: 'Qual valor deseja depositar: ',
                        
                }
    ])  
}
    menu()

}