export {};

function double(value: number): number;
function double(value: string): string;
//上のものをシグネチャーといい、両方の値を受け付ける

function double(value: any): any {
  //any型なのは、union型で指定する必要はなく、上のシグネチャーで定義している
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
