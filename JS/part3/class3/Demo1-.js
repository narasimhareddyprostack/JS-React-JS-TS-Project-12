class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name = name
        this.acc_Bal =amount
    }
    open_Account(){
        console.log("Account Opened Successfullt")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal
    }
    close_Account(){}
}


let a1=new Account(101,"Rahul", 6000)
let a2=new Account(102,"Priyanka",50000)


console.log(a1)
//console.log(a2)

a1.deposit_Amount(3999)
console.log(a1)

a1.withdrawl(400)
console.log(a1)

console.log(a1.get_Bal())