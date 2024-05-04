{
    //  function


    // normal function
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }
    add(1, 2)

    // arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    addArrow(2, 3)

    // object > function ---> method

    const poorUser = {
        name: 'Halal',
        balance: 0,
        addBalance(balance: number) : string {
            return `my new balance is: ${this.balance + balance}`
        }
    }










}