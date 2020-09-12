export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

// class Taro extends Mahotsukai, Souryo {}
// 単一のクラスしか継承できない

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('iozazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
