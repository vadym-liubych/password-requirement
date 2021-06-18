'use strict';

const inputs = {
  'a 1-5': 'abcdj',
  'z 2-4': 'asfalseiruqwo',
  'b 3-6': 'bhhkkbbjjjb',
};

function validTextFile(inputs) {
  let counter = 0;

  for (let input in inputs) {
    let letters = 0;
    const minNum = input.split(' ')[1].split('-')[0];
    const maxNum = input.split(' ')[1].split('-')[1];

    let values = inputs[input];

    for (let value of values) {
      if (input[0] === value) {
        letters++;
      }
    }

    if (letters >= minNum && letters <= maxNum) {
      counter++;
    }
  }
  return counter;
}

const result = validTextFile(inputs);

console.log("Matches values in:", result, "fields");
