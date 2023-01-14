class Account {
  constructor(owner, currency, pin) {
    this.movements = [];
    this.owner = owner;
    this.currency = currency;
    // Protected properties
    this.movements = [];
  }
  // Public interface
  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withDraw(val) {
    this.deposit(-val);
    return this;
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(250).withDraw(100);
console.log(acc1);
