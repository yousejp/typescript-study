export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;
// Partialは全てのプロパティにオプショナルな型を付与できる
type RequiredType = Required<Profile>;
// Requiredは全てのプロパティに必須な型を付与できる
