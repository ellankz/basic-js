module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsNum = Math.pow(2, disksNumber) - 1;
  const turnsPerSec = turnsSpeed / 3600;
  const seconds = parseInt(turnsNum / turnsPerSec, 10);
  return { turns: turnsNum, seconds: seconds };
};
