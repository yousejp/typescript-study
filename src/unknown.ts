export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);

// let sumUnknown = numberUnknown + 10;
// unknownだと数値じゃないかもしれないのでエラー

if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}
//型を調べて安全を図ることをtypeガードという
