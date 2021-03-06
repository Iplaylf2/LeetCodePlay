/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  const shortNums = [],
    askMap = new Map();

  var zeroCount = 0;
  var last = -Infinity;
  for (const num of nums) {
    if (num === last) {
      if (num === 0) {
        zeroCount++;
      } else {
        askMap.set(num, true);
      }
    } else {
      shortNums.push(num);

      askMap.set(num, false);
    }

    last = num;
  }

  const answer = [];
  if (zeroCount > 1) {
    answer.push([0, 0, 0]);
  }

  const limitI = shortNums.length - 1,
    limitJ = shortNums.length;
  for (var i = 0; i < limitI; i++) {
    const left = shortNums[i];
    if (left === 0) {
      break;
    }
    for (var j = askMap.get(left) ? i : i + 1; j < limitJ; j++) {
      const mid = shortNums[j];
      const ask = 0 - left - mid;
      if (ask < mid) {
        break;
      }
      const askDuplicate = askMap.get(ask);
      if (askDuplicate !== undefined) {
        if (ask === mid) {
          if (askDuplicate) {
            answer.push([left, mid, ask]);
          }
          break;
        } else {
          answer.push([left, mid, ask]);
        }
      }
    }
  }

  return answer;
};
