export {};

let bmiTest = (height: number, weight: number): number => {
  return weight / (height * height);
};
console.log(bmiTest(1.7, 60));

let bmiTest2: /**/ (height: number, weight: number) => number /**/ = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};
console.log(bmiTest2(1.7, 60));

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
//関数が1行の場合はreturnを省略できる

console.log(bmi(1.78, 86));
