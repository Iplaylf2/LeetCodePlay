/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const reference = strs.pop() || "";

  var i = 0;
  for (const current of reference) {
    if (strs.every(s => s.charAt(i) === current)) {
      i++;
    } else {
      return reference.substring(0, i);
    }
  }

  return reference;
};
