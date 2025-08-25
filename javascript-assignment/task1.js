function sumNumbersInString(str) {
  let sum = 0, num = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= '0' && ch <= '9') {
      num += ch;
    } else {
      if (num) {
        sum += Number(num);
        num = "";
      }
    }
  }
  if (num) sum += Number(num);
  return sum;
}

console.log(sumNumbersInString("foo8bar8cat2tc2")); // 20
console.log(sumNumbersInString("hello123world7"));  // 130
console.log(sumNumbersInString("noNumbers"));       // 0
