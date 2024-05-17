import inquirer from "inquirer";
let exe
console.log("Welcome to the bank ----First you have to sign up ")
let data = await inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"Enter your name :"
    },
    {
        type:"number",
        name:"pin",
        message:"Input your pin :"
    },
])
let amount = await inquirer.prompt([
    {
        type:"number",
        name:"am",
        message:"Enter your amount"
    }
])
console.clear()
console.log("User Identification")
do {
  console.log(data.name,data.pin)
    let userchoice = await inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter your name :"
        },
        {
            type:"number",
            name:"pin",
            message:"Input your pin :"
        },
    ])
    if (data.name===userchoice.name  && data.pin===userchoice.pin)
        {
            let change = await inquirer.prompt([
                {
                    type:"list",
                    name:"choice",
                    message:"Want to add,deduct or show amount",
                    choices:['Add amount','Deduct amount','Show amount']
                },
            ])
            if(change.choice === 'Add amount'){
                let add = await inquirer.prompt([
                  {
                    type:"number",
                    name:"addAm",
                    message:"Add amount of :"
                  }
                ])
             amount.am+=add.addAm
            console.log("Your total amount :" , amount.am)    
        }
            else if(change.choice === 'Deduct amount'){
                let sub = await inquirer.prompt([
                    {
                    type:"number",
                    name:"subAm",
                    message:"subtract amount of :"
                    }])
                    
                if(sub.subAm>amount.am){
                    console.log("Not enough money")
                }
                else{
                    amount.am-=sub.subAm
                console.log("Your total amount :" ,amount.am)
                }}
                else if(change.choice==='Show amount')
                    {
                        console.log("Your current amount " ,amount.am)
                    }
        }
        else
        {
            console.log("incorrect Pass or Pin")
        }
        let sec_try = await inquirer.prompt([
            {
                type:"list",
                name:"stry",
                message:"Want to login again ",
                choices:["yes","no"]
            }
        ])
        if (sec_try.stry==='yes') {
            exe=true
        } else {
            exe=false
        }
}
while (exe);