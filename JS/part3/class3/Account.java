class Account{
    int acc_Id;
    String acc_Name;
    int acc_Bal;
    Account(int id, String name,int amount){
        this.acc_Id = id ;
        this.acc_Name = name;
        this.acc_Bal = amount;
    }
    public static void main(String[] args) {
        new Account(101,"Rahul",50000);
        new Account(102,"Sonia",40000);
    }
}