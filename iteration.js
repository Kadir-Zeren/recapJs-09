const prices = [250, 150, 300, 500];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

prices.forEach((p) => console.log(p));
prices.forEach((p, i) => console.log("DEGER:", p, "INDIS", i));

let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

prices.forEach((price) => console.log(price * 2));

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan"];

const upperName = names.map((name) => name.toLocaleUpperCase());

console.log(upperName);
console.log(names);

names.map((name, i, arr) => {
  arr[i] = name.toLocaleUpperCase();
});

console.log(names);

const euro = 21.78;
const dolar = 19.8;
const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
const euroPrices = tlPrices.map((tl) => Number(tl / euro).toFixed(2));

console.log(dolarPrices);
console.log(euroPrices);
console.log(tlPrices);

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
const biggerThan = salaries.filter((salary) => salary >= 10000);
console.log(biggerThan);
console.log(salaries);

const range = salaries.filter((salary) => salary >= 10000 && salary <= 10000);
console.log(range);

const biggerThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));
console.log(biggerThan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s));
