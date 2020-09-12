export {};

let name: any = 'Ham';

// let length: number = name.length;
// let length = name.length as number;
// 上記の方法でもできるが、下記の方が早い段階で型を特定できる

// let length = (<string>name).length;
let length = (name as string).length;
// 両方とも同じ効果だが、<string>の方はReactのJSXに似てしまうためasを推奨する

// length = 'foo';
