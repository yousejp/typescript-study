export {};

class Person {
  constructor(public name: string, protected age: number) {}
  // typescriptでは自動で初期化処理をできる
}

const me = new Person('はむさん', 43);
console.log(me);
