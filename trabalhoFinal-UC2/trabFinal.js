const ask = require('readline-sync')


let charactersWarrior
let charactersWizard
let charactersRanger


function createCharacters() {
    console.clear

    charactersWarrior = {
        class: "Worrior",
        health: 40,
        minDamage: 5,
        maxDamage: 20
    }
    charactersWizard = {
        class: "Wizard",
        health: 95,
        minDamage: 5,
        maxDamage: 10
    }

    charactersRanger = {
        class: "Ranger",
        health: 45,
        minDamage: 40,
        maxDamage: 10
    }
   
}

createCharacters()


console.log(`
        1- Warrior:
        health: 40
        minDamage: 5
        maxDamage: 20
        ---------------
        2- Wizard
        health: 95
        minDamage: 5
        maxDamage: 10
        ----------------
        3- Ranger
        health: 45
        minDamage: 40
        maxDamage: 10
        ----------------
        0- exit
        ----------------`)

let option = Number(ask.question(`chosse option: `))

switch (option) {

    case 1:
        console.log(charactersWarrior)
        break

    case 2:
        console.log(charactersWizard)
        break

    case 3:
        console.log(charactersRanger)
        break

    case 0:
        process.exit()
        break

    default:
        console.log
            ("invalid option. try again")

        ask.question
            ("press enter to continue...")
        break
}
//-------------------------------------------------
let enemies = [

    {
        name: "Mine Goblin",
        health: 40,
        minDamage: 5,
        maxDamage: 10
    },

    {
        name: "Moria Orc",
        health: 60,
        minDamage: 8,
        maxDamage: 15
    },

    {
        name: "Cave Troll",
        health: 90,
        minDamage: 10,
        maxDamage: 20
    },

    {
        name: "Dark Bat",
        health: 30,
        minDamage: 4,
        maxDamage: 8
    }
]

function GenerateEnimies(enimies) {
    let enemiesPosition = Math.floor(Math.random() * array.length)
    return enemies[enemiesPosition]

}



function WarriorAttack(){

    console.log("⚒️ The warrior strikes with a powerful attack!")

    let damage = Math.floor(Math.random() * 12) + 18

    return damage
}
function WizardAttack(){
    console.log("⚒️ The wizard strikes with a powerful attack!")

    let damage = Math.floor(Math.random() * 9) + 12

    return damage
}
 function RangerAttack(){
    console.log("⚒️ The ranger strikes with a powerful attack!")

    let damage = Math.floor(Math.random() * 6) + 16

    return damage
}
 




