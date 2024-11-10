export default function sumValues(...args) {
  const convertedArgs = args.map((arg) => {
    const convertedArg = parseFloat(arg);
    if (isNaN(convertedArg)) {
      throw new Error("引数に10進数としてパースできない値が含まれています");
    }

    return convertedArg;
  });

  const sum = convertedArgs.reduce(
    (sum, currentValue) => sum + currentValue * 10,
    0
  );
  return sum / 10;
}
