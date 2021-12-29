function atmMoney(x){
    let money = 1000;
    let withdraw = (money - x);
        if(withdraw > 0){
        alert(`${x} euros withdrawn, you have ${withdraw} euros left`)
        }
        else{
            alert(`You don't have enough funds to withdraw that amount`)
        }
    return withdraw
}
atmMoney(prompt("Enter the amount you want to withdraw"));