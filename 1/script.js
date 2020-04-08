let partnerNameSet=[
    "Kateruna",
    "Danya",
    "Ihor"
]
let childrenNumberSet=[
    "0",
    "1",
    "2"
]
let professionsSet=[
    "Actor",
    "Engineer"
]
let counriesSet=[
    "Ukraine",
    "Spain",
    "USA"
]
let questions=[
    "Твой будущий партнер - ",
    "Количество детей будет - ",
    "Твоя будущая професия - ",
    "Ты переедешь в - "
]
let sets=[]
sets.push(partnerNameSet)
sets.push(childrenNumberSet)
sets.push(professionsSet)
sets.push(counriesSet)

let answers=[]

for (let i=0;i<sets.length;i++){
    for (let k=0;k<sets[i].length;k++ ){
        if(confirm(questions[i]+sets[i][k])){
            answers.push(sets[i][k])
            break
        }
    }
    if (typeof(answers[i])=='undefined'){
        answers.push(prompt(questions[i]))
    }
}
alert(`Ви укладите шлюб з `+(answers[0])+` та у вас буде `+(answers[1])+` дітей.`)
alert(`Ви переїдите у `+(answers[4])+` на посаду `+(answers[3]))