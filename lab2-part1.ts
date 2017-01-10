/*Write a TypeScript class in the lab1-part1.ts file that satisfies the following requirements:

Has a constructor with the following parameters
initialBalance (a number)
ownerName (a string)
Saves those parameters as private fields in your class
Has a deposit method which takes a number amount as a parameter and adds it to your account's balance
Has a withdraw method which takes a number amount as a parameter and subtracts it to your account's balance
Has a checkBalance method which prints out the current balance of the account and the account owner's name (pro tip: ES6 template literals make this a bit cleaner)
*/

class CheckingsAccount {
    private balance: number;
    private ownerName: string;
    private depositAmount: number;
    private withdrawAmount: number;

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
        this.withdrawAmount = withdrawAmount;
        this.balance += this.withdrawAmount
        return this.balance;
    };
};

let bank:CheckingsAccount = new CheckingsAccount(200,'Ashlyn');
bank.deposit(50);
console.log(bank);
bank.withdraw(25);
console.log(bank);