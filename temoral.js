console.log(`5 + 7 = ${5 + 7}`);

console.log(`Line 1
Line 2
Line 3`);

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);

const square = n => n * n;
console.log(square(5));

const obj = {
value: 50,
test: function () {
console.log(this.value);
}
};
obj.test();

const product = { name: "Pen", price: 10 };
const newProduct = { ...product };
console.log(newProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 10, 7));

const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.data?.value);

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(j);

const kmph = 65;
const speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

const age = 17;
console.log(age >= 18 ? "Adult" : "Minor");

const num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

const nums = [1,2,3];
const updatedNums = [...nums, 4, 5];
console.log(updatedNums);

const arrA = ["x","y"];
const arrB = ["z"];
const combinedAB = [...arrA, ...arrB];
console.log(combinedAB);

const printNames = (...names) => names;
console.log(printNames("A","B","C"));

const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const id2 = 101;
const role = "admin";
const userObj = { id2, role };
console.log(userObj);

const name = "Chris";
const score = 92;
const profile = {
name,
score,
show() {
console.log(`${name} scored ${score}`);
}
};
profile.show();

console.log(`Today is ${new Date().toDateString()}`);

const person = "Alex";
const marks = 87;
console.log(`Hello ${person}, your score is ${marks}/100`);

const add = (a, b) => a + b;
console.log(add(2,5));

const isAdult = age => age >= 18;
console.log(isAdult(20));

const double = n => n * 2;
console.log(double(6));

const arrClone = [...nums];
console.log(arrClone);

const arrNew = [100, ...nums];
console.log(arrNew);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99 };
const finalObj = { ...obj1, ...obj2 };
console.log(finalObj);

const user2 = {
name: "Alex",
address: {
city: "Bangalore"
}
};
console.log(user2?.address?.city);
console.log(user2?.job?.title);

const config = {};
console.log(config?.settings?.theme);
