const totalIntegers = function(obj, count = 0) {

  if (typeof obj !== 'object' || obj === null) return;

  const elements = Array.isArray(obj) ? obj : Object.values(obj)

  for (const el of elements) {
    if (Number.isInteger(el)) ++count;
    if (typeof el === 'object' && el !== null) count += totalIntegers(el);
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;