const colors = require('colors')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            name:'random1',
            message: 'Qual a primeira nota? '
        },
        {
            name: 'random2',
            message: 'Qual a segunda nota? '
        }
    ])
    .then((answers) => {
        console.log(answers);
        const media = ((Number(answers.random1) + Number(answers.random2)) /2).toFixed(2)
        if(media >= 6){
            console.log(`Aluno aprovado com média ${media}!!!`.green)
        }else{
            console.log(`Aluno Reprovado com média ${media}!!!`.red)

        }
        
    })
    .catch(err=> console.error(err));