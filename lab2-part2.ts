class SavingsAccount {
    private balance: number;
    private ownerName: string;
    private depositAmount: number;
    private withdrawAmount: number;
    private limit: number = 0;

    constructor(balance:number, ownerName:string) {
        this.balance = balance;
        this.ownerName = ownerName;
    };

    deposit(depositAmount:number) :number{
        this.depositAmount = depositAmount;
        this.balance += this.depositAmount;
        return this.balance;
    };

    withdraw(withdrawAmount:number) :number{
        this.limit += 1;
        if (this.limit > 3) {
            return 0;
        } else {
            this.withdrawAmount = withdrawAmount;
            this.balance -= this.withdrawAmount
            return this.balance;
        };
    };
};