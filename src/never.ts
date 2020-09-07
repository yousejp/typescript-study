export {};

function error(message: string): never {
  throw new Error(message);
}
//関数の中で例外を起こす場合neverを使用する
//voidは呼び元に戻るがneverは戻らない
//実務では使う場面がないのかも？

try {
  let result = error('test');
  console.log({ result });
  //上記のconsole.logは実行されない

  console.log('try');
} catch (error) {
  console.log({ error });

  console.log('catch');
}

let foo: void = undefined;
let bar: never = error('only me!');
