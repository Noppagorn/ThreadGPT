function convertToNumber(input: string, isTemperature?:boolean, isTopP?:boolean ): number {
  const number = Number(input);
  if (isNaN(number)) {
    throw new Error(`${input} is not a valid number`);
  }
  return number;
}
