export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  public testName: string = 'Test';

  static work() {
    //     "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(me.testName);

console.log(Me.isProgrammer);
console.log(Me.work());
