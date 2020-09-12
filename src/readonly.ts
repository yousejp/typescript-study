export {};

// class VisaCard {
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }

class VisaCard {
  constructor(public readonly owner: string) {}
  // publicは削れるが、省略しないほうがわかりやすい
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
