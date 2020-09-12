export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;

// nickname = 'Hamtaro';
// 'Ham'型になっているため'Ham'以外は代入できない
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;
// 全ての要素がreadonlyになる

// profile.name = 'Ham';
// profile.height = 180;
