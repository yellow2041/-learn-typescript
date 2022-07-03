interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용
const seho: User = {
  age: 33,
  name: "세호",
};

const getUser = (user: User) => {
  console.log(user);
};
const capt: User = {
  name: "cap",
  age: 32,
};
getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunc {
  (a: number, b: number): number;
}

let sum: SumFunc;
sum = (a: number, b: number): number => {
  return a + b;
};

//인덱싱
interface StringArr {
  [index: number]: string;
}
let arr: StringArr = ["a", "b", "c"];
arr[0] = "q";

//딕셔너리 패턴
interface StringRegexDict {
  [key: string]: RegExp;
}
let obj: StringRegexDict = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj["cssFile"] = /\.cs$/;
Object.keys(obj).forEach((value) => {});

//인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let cap: Developer = {
  name: "a",
  age: 1,
  language: "ts",
};
