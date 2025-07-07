var Accounts = /** @class */ (function () {
    //parameterized constructor
    // constructor(ano:number, name:string,bal:number){
    //     this.accno = ano;
    //     this.acchldname = name;
    //     this.balance = bal;
    // }
    // constructor(){
    //     this.accno = 12345678901n;
    //     this.acchldname="deepa";
    //     this.balance=100000n;
    // }
    // it will allows to define default or parameterized constructor
    // we can not have more than one constructor in a class(Either we can default or parameterized constructor)
    //--------------------------------
    //As we have initialized Parameters, the same constructor can be be used as default and parameterized constructor 
    // Parameterized constructoe and default constructor can be defined by initializing the default values
    function Accounts(ano, name, bal) {
        if (ano === void 0) { ano = 10000; }
        if (name === void 0) { name = "default"; }
        if (bal === void 0) { bal = 25000; }
        this.accno = ano;
        this.acchldname = name;
        this.balance = bal;
    }
    Accounts.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Amount deposited successfully");
        }
        else {
            console.log("Invalid Amount, cannot deposit zero or negative amount");
        }
    };
    Accounts.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Amount withdrawn successfull");
        }
        else {
            console.log("Invalid or Insufficient balance");
        }
    };
    Accounts.prototype.showBalance = function () {
        return Number(this.balance);
    };
    return Accounts;
}());
var acc1 = new Accounts(234234324324, "Vidya", 10000);
acc1.deposit(5000);
console.log("Balance after deposit :" + acc1.showBalance());
acc1.withdraw(2000);
console.log("Balance after withdraw : " + acc1.showBalance());
var acc2 = new Accounts();
acc2.deposit(500);
console.log("Balance after deposit :" + acc2.showBalance());
acc2.withdraw(1000);
console.log("Balance after withdraw : " + acc2.showBalance());
