function sumValues(...args) {
  const convertedArgs = args.map((arg) => {
    const convertedArg = parseFloat(arg);
    if (isNaN(convertedArg)) {
      throw "引数に10進数としてパースできない値が含まれています";
    }

    return convertedArg;
  });

  const sum = convertedArgs.reduce(
    (sum, currentValue) => sum + currentValue * 10,
    0
  );
  console.log(sum / 10);
}
