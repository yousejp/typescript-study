export {};

const reducer = (accumulator: number, currentValue: number): number => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};
//配列の全ての数currentValueを足していっているのがaccumulator
// [1, 2, 3].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

const sumTest: (...values: number[]) => number = (
  ...values: number[]
): number => {
  // console.log(values);
  return 100;
};
