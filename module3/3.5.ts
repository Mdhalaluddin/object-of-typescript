{
    //
    // ---------access modifiers 

    class BankAccount {
      public  id: number;
      public  name: string;
      private  _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        addBalance(amount: number){
            this._balance = this._balance + amount;
        }
        getBalance (){
            return this._balance;
        }
    }

    const getGoribManuserBalance = new BankAccount(22, "Mr. Gorib", 20);
    // getGoribManuserBalance.balance=0;
   getGoribManuserBalance.addBalance(30);
   const goribBalance = getGoribManuserBalance.getBalance();
  console.log(goribBalance);




    //
}