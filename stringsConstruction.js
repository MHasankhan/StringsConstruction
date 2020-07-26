function stringsConstruction(a, b) {
  const countOfStrings = []; //counts of strings a in b
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        count += 1;
      }
      if (j === b.length - 1) {
        countOfStrings.push(count);
      }
    }
  }
  return console.log(Math.min(...countOfStrings));
}

stringsConstruction("abc", "abccab");
