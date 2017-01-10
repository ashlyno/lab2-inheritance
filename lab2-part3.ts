
class Account {
    private balance: number;
    private ownerName: string;
    private depositAmount: number;
    private withdrawAmount: number;
    public limit: number = 0;

    constructor(balance:number, ownerName:string) {
        this.balance = balance;
        this.ownerName = ownerName;
    };

    deposit(depositAmount:number) :number{
        this.depositAmount = depositAmount;
        this.balance += this.depositAmount;
        return this.balance;
    };

    withdraw(withdrawAmount:number, limit?:number) :number{
            this.withdrawAmount = withdrawAmount;
            this.balance -= this.withdrawAmount
            return this.balance;
    };

};

class Checkings extends Account{

    constructor(balance:number, ownerName:string) {super(balance, ownerName)}
        deposit(depositAmount) :number{
            return super.deposit(depositAmount);
        };
        withdraw(withdrawAmount) :number{
            return super.withdraw(withdrawAmount);
        };
};

class Savings extends Account {

    constructor(balance:number, ownerName:string) {super(balance, ownerName)}
        deposit(depositAmount) :number{
            return super.deposit(depositAmount);
        };
        withdraw(withdrawAmount) :number{
            this.limit += 1;
            if (this.limit > 3) {
                console.log("Sorry you've exceede your limit");
            } else {
                super.withdraw(withdrawAmount);
            };  
            return super.withdraw(withdrawAmount);
        };
};

let bank:Account = new Account(100, 'Ash');
console.log(bank);
let sav = new Savings(100, 'Chad');
console.log(sav);