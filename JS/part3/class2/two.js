class Account{
      acc_Id;
      acc_Name;
      acc_Bal;
     open_Account(){
      console.log("Account Opened Successfully")
     }
     deposit_Amount(){
      console.log("Amount Deposited Successfully")
     }
     withdwan_Amount(){
      console.log("Insuffient Bal")
     }
     get_Bal(){
      console.log("Server Busy")
     }
     close_Amount(){
      console.log("Bal is : Negative.. Add more funds to close")
     }
}
let a1=new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdwan_Amount()
a1.get_Bal()
a1.close_Amount()