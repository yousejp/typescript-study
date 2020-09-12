export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない。

class MyNumberCard {
  private _owner: string; // * 途中で変更できない。を満たすためprivateにする
  private _secretNumber: number; // * 参照できない。を満たすためprivateにする
  //上記はメンバー変数

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
  // getをつけると参照できるようになる

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);

console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());

// card.owner = 'Ham'; // * 途中で変更できない。を満たす
console.log(card.owner);

// card._secretNumber; // * 参照できない。を満たす
