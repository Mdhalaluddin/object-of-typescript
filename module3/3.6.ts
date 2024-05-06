{
    //
    //---------get and set-----------

    class BankAccount {
        public id: number;
        public name: string;
        protected _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // ----setting
        set deposit (amount: number){
            this._balance = this._balance + amount;
        }

        //getting

        get balance(){
            return this._balance
        }
    }

    const getGoribManuserBalance = new BankAccount(12, "Mr. Gorib", 50);

    getGoribManuserBalance.deposit = 50;

    const myBalance = getGoribManuserBalance.balance;
    console.log(myBalance);


















}