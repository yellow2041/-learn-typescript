const logMessage = (value: string | number) => {
  console.log(value);
  if (typeof value === "number") value.toLocaleString();
  if (typeof value === "string") value.toString();
  throw new TypeError("value must be string or number");
};

logMessage("hello");
logMessage(100);

let seho: string | number | boolean;

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// const askSomeone = (someone: Developer | Person) => {
//   //someone.name; //공통속성만 접근 가능
//   //someone.skill;
//   //someone.age;
// };
// askSomeone({ name: "디벨로퍼", skill: "web" });
// askSomeone({ name: "capt", age: 100 });

const askSomeone = (someone: Developer & Person) => {
  someone.name; //모든 속성 접근 가능
  someone.skill;
  someone.age;
};
askSomeone({ name: "디벨로퍼", skill: "web", age: 12 }); //모든 속성을 넘겨줘야함
//askSomeone({ name: "capt", age: 100 });  //error

let capt: string & number & boolean;
