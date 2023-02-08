// either data type you want

let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let alex: User | Admin = { name: "Alex", id: 334 };

alex = { username: "hc", id: 332 };

// function getDbId(id: number | string){
// console.log(`DB id is: ${id}`);

// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2"]
// const data3: string[] | number[] = ["1", "2", 3] --> wrong

const data3: (string | number)[] = ["1", "2", 3]

