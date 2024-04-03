class Account{
        acc_Id;
        acc_Name;
        acc_Bal;
        constructor(id,name,amount) {
           this.acc_Id=id;
           this.acc_Name=name;
           this.acc_Bal=amount
        }

}
let a1=new Account(101, "Rahul", 5000)
let a2=new Account(102, "Sonia", 400000)
let a3=new Account(103, "Priyanka", 600000)
console.log(a1)
console.log(a2)
console.log(a3)