function sumOfString(str) {
  let parts = str.split(",");
  let sum = 0;
  for (let i = 0; i < parts.length; i++) {
    sum += parseFloat(parts[i].trim());
  }
  return sum;
}

console.log(sumOfString("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); // 57.3
