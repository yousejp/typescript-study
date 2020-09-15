export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;
// PropertyTypesはProfileのキーが型として代入される

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptoinalProfile = Optional<Profile>;
// in keyofは、あるオブジェクトのプロパティの名前から型を作りひとつづつ取り出す
