export {};

class PersonJP {
  constructor(public name: string) {}
}
class PersonEN {
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {}
}
namespace JapaneseTest {
  // exportを書かなくてはいけない
  export class Person {
    constructor(public name: string) {}
  }
}
const test = new JapaneseTest.Person('テスト');
console.log(test.name);

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
