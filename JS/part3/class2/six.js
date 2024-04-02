class Account{
    acc_Bal=0;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal;
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
}

let a1=new Account()
console.log(a1)
a1.deposit_Amount(10001)
console.log(a1)
a1.withdrawl_Amount(2001)
console.log(a1)

console.log(a1.get_Bal())