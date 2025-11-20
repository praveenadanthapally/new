const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

function processProducts(products) {
  const names = products.map(p => p.name);
  products.forEach(p =>
    console.log(
      p.price > 50
        ? `${p.name} is above $50`
        : `${p.name} is below $50`
    )
  );
  return names;
}

processProducts(products);
