const inquirer =require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

operation()

function operation() {
    inquirer.prompt ([
        {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
        ]
    }

    ]).then((answer) =>  {
        const action = answer['action']
        if (action === 'Criar Conta'){
              CreateAccount()
        }else if (action === 'Consultar Saldo'){
        } else if (action === 'Depositar'){
        } else if(action === 'Sacar'){
        } else if(action === 'Sair')
            console.log(chalk.bgBlue.Black('Obrigado por usar o Account'))
            process.exit()
    }).catch(err => console.log(err))
}

function CreateAccount() {
    console.log(chalk.bgGreen.black('Parabens, por escolhar ao nosso banco!'))
    console.log(chalk.green('Defina as opçoes da sua conta. '))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta: ',

        },
    ]).then((answer) => {

        const accountName = answer['accountName']
        console.log(accountName)

        if(!fs.existsSync('account')){
            fs.mkdirSync('account')
        }

        if(fs.existsSync(`account/${accountName}.json`)) {
            console.log(
                chalk.bgRed.black('Esta conta já existe'),
            )
            buildAccount()
            return
    }
        fs.writeFileSync(`account/${accountName}.json', '{"balance: 0"}`,
        function (err) {console.log(err)


        },
    )

    console.log(chalk.green('Parabens, a sua conta foi criada! '))
    })
    .catch((err) => console.log(err))
}