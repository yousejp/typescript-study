export {};

let bmiTest = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmiTest(1.7, 60));

let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

// let bmi: //ここから(height: number, weight: number) => number//ここまでがアノテーション = function (
//   height: number,
//   weight: number
// ): number {
//   return weight / (height * height);
// };

console.log(bmi(1.78, 86));
