export {};

class Person {
  public name: string;
  // publicは書いても書かなくても良い（デフォルト）
  // private age: number;
  // privateはインスタンスでの呼び出しをできないようにする（Person内ではできる）
  protected age: number;
  protected nationality: string;
  // protectedはサブクラスでも使用できる（privateではできない）

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
  //関数を上書きしている
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);

let android = new Android('android', 30, 'Japan');
console.log(android.profile());

// console.log(taro.age);
// let hanako = new Person();
