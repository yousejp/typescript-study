export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];
console.log(nijigenHairetsu[1][0]);

let nijigenHairetsu2: (string | number)[][] = [
  [50, 100],
  ['test', 'test2'],
];
console.log(nijigenHairetsu2[1][1]);

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
