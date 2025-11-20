if (true) {
let x = 10;
var y = 20;
}
console.log(y);
console.log(x);

const profile = {
user: {
details: {
email: "[test@mail.com](mailto:test@mail.com)"
}
}
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);

const order = {
product: {
name: "Laptop"
}
};

console.log(order?.product?.specs?.ram);
