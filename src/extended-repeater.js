function genRepeated(inputString, addition, repeterNum, separator) {
  let outputStr = '';
  for (let i = 0; i < repeterNum; i++) {
    outputStr = outputStr + inputString + addition;
    if (i !== repeterNum - 1) {
      outputStr = outputStr + separator;
    }
  }
  return outputStr;
}

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition =
    options.addition === undefined
      ? ''
      : options.addition === null
      ? 'null'
      : options.addition.toString();
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  const inputStr = str === null ? 'null' : str.toString();

  const addedStr = genRepeated(
    addition,
    '',
    additionRepeatTimes,
    additionSeparator
  );

  return genRepeated(inputStr, addedStr, repeatTimes, separator);
};
