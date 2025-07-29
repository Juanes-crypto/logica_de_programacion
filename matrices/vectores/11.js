/**
 * lea un vector S de N elementos e inviertalo. utilice otro vector
 * s 14 12 6 25 34 23 5
 * SI 5 23 34 25 6 12 14
 */

const S = [14, 12, 6, 25, 34, 23, 5];
const SI = [];

for (let i = S.length - 1; i >= 0; i--) {
    SI.push(S[i]);
}

console.log(`Vector original S: ${S.join(' ')}`);
console.log(`Vector invertido SI: ${SI.join(' ')}`);