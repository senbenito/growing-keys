
'use strict';

exports.growingKeys = function(num, string) {
//your code here
  if (num <= 0) return 'invalid input';
  if (string.length === 0) return 'invalid input';
  let results = {};
  let pushString = string;
  for (let i=0; i<num; i++){
    // results[`${pushString}`] = true;
    results[pushString] = true;
    pushString += string;
  }
  console.log(results, typeof results);
  return results;
};
