let balance = 0;
let balancep = document.querySelector("#balance");
let btn = document.querySelector("#showbutton");
let password = document.querySelector("#password");
let action = document.querySelector("#action");
let amount = document.querySelector("#amount");
let table = document.querySelector("table tbody");
let mylogs = [
{   
    beforeBalance :0,
    type :"deposit",
    amount:0,
    afterBalance:0
}
];    

function showpassword(){
    if(password.classList.contains("d-none")){

        password.classList.replace("d-none","d-block");
    }else{
        if(password.value == "1234"){
            password.remove();
            btn.remove();
        balancep.innerText = balance;
        action.classList.replace("d-none","d-block");
        renderLogs();
    }
    else{
        alert("Incorrect Password");
    }}
    
}
function deposit(){
    let oBalance = balance;
    balance = balance + +amount.value;
    balancep.innerText = balance;
    let obj ={   
        beforeBalance :oBalance,
        type :"deposit",
        amount:+amount.value,
        afterBalance:balance
    };
    mylogs.push(obj);
    renderLogs();

};
function withdraw(){
    if(amount.value > balance){
        alert("Insufficient Balance");
    }
    else{
        let oBalance = balance;
        balance = balance - amount.value;
        balancep.innerText = balance;
        let obj ={   
            beforeBalance :oBalance,
            type :"withdraw",
            amount:+amount.value,
            afterBalance:balance
        };
        mylogs.push(obj);
        renderLogs();   
    }
};

function renderLogs(){
    table.innerHTML = "";
    mylogs.forEach((log,index)=>{
        table.innerHTML +=
        `<tr>
            <th>${index+1}</th>
            <th>${log.beforeBalance}</th>
            <th>${log.type}</th>
            <th>${log.amount}</th>
            <th>${log.afterBalance}</th>
        </tr>`;
    })
}