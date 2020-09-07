export {};

let profile1: object = { name: 'Ham' };
profile1 = { brithYear: 1976 };
//objectで上書きできてしまうので制約が甘い

// let profile2 = { name: 'Nimo' };
//ここで型推論が出る

let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Nimo' };

let profile3: {
  name: string;
  num: number;
} = {
  name: 'Ham',
  num: 1,
};
profile3.num += 2;
console.log(profile3.num);
