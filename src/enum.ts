export {};

enum Months {
  January = 1,
  //上記は=1がないと0が設定される
  //上から順番位
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   February: 1
// };
//
// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  //  YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });
// let yellow = COLORS.YELLOW;
//ここではYELLOWがないのでエラーになる

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
let yellow = COLORS.YELLOW;
console.log({ yellow });
