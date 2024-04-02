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
a1.deposit_Amount(500)
a1.deposit_Amount(50)
console.log(a1)
a1.withdrawl_Amount(15)
console.log(a1)

let a2=new Account()
a2.deposit_Amount(700)
a2.deposit_Amount(70)
console.log(a2)
a2.withdrawl_Amount(75)
console.log(a2)


console.log("**** Printing Bal's")

console.log(a1.get_Bal())
console.log(a2.get_Bal())


