/**
 * Random between min and max
 * @param {number} min - Minimum number range
 * @param {number} max - Maximun number range
 * @returns {number} Result of ramdomize
 */
function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomBetween;
