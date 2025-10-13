class Ex03Accounts{
    protected accno:number;
    protected acchldname:string;
    protected balance:number;

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
    constructor(ano=10000, name="default",bal=25000){
        this.accno = ano;
        this.acchldname = name;
        this.balance = bal;

    }

    deposit(amount:number):void{
        if(amount>0){
            this.balance+=amount;
            console.log("Amount deposited successfully");
        }else{
            console.log("Invalid Amount, cannot deposit zero or negative amount");
        }
    }

    withdraw(amount:number):void{
        if(amount >0 && amount <= this.balance){
            this.balance-=amount;
            console.log("Amount withdrawn successfull");
        }else{
            console.log("Invalid or Insufficient balance");
        }
    }

    showBalance():number{
        return Number(this.balance);
    }
}

// Typescript supports only single inheritance and multilevel inheritance. uses extends keywords
class SavingAccount extends Ex03Accounts{
    private roi : number;
    constructor(ano:number, name:string,bal: number, roi:number){
        //Constructors for derived classes must contain a 'super' call
        super(ano,name,bal);// super key
        this.roi=roi;
    }
    addInterest():void{
       // const 
    }
}

const acc01 = new Ex03Accounts(234234324324,"Vidya",10000);
acc01.deposit(5000);
console.log("Balance after deposit :"+ acc01.showBalance());
acc01.withdraw(2000);
console.log("Balance after withdraw : "+ acc01.showBalance());


const acc02 = new Ex03Accounts();
acc02.deposit(500);
console.log("Balance after deposit :"+ acc02.showBalance());
acc02.withdraw(1000);
console.log("Balance after withdraw : "+ acc02.showBalance());



