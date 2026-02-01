// Only 2 Access Modifiers in JavaScript
// private -> #
// public -> default all are public
class Bank {
  #balance = 0; //private fields

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance >= amount && amount > 0) {
      this.#balance -= amount;
      return console.log(`Withrawen amount is  ${amount}`);
    } else {
      return console.log("Insufficient balance");
    }
  }
  getBalance() {
    console.log("Your Balance is " + this.#balance);
  }
}

// can not acces balance diractly
// we have to access uisng the given set of rules(methods)

const b = new Bank();
b.deposit(1000);
b.getBalance();
b.withdraw(450);
b.getBalance();
