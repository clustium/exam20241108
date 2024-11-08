function sumValues(...args) {
  const sum = args.reduce((sum, currentValue) => (sum += currentValue), 0);
  console.log(sum);
}

sumValues(1, 2, 5);
