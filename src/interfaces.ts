export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43,
};

//interfaceでもオブジェクトに型を付けれる
//二つの違いはクラスを使用したときにわかるので後回し
