const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  const sampleNum = parseFloat(sampleActivity);
  if (
    !sampleNum ||
    sampleNum <= 0 ||
    sampleNum > MODERN_ACTIVITY ||
    isNaN(sampleNum)
  ) {
    return false;
  }
  const rateConstant = 0.693 / HALF_LIFE_PERIOD;
  const res = Math.log(MODERN_ACTIVITY / sampleNum) / rateConstant;
  return Math.ceil(res);
};
