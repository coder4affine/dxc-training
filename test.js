const x = { a: 1, b: 2 };
const y = { c: 3, d: 4 };

const oldAppr = Object.assign({},x, y);
const newAppr = {...x, ...y};

const b = 3

const {b:test1, ...test} = newAppr;

console.log(b);
console.log(test1);
console.log(test);

console.log(oldAppr);
console.log(newAppr);

console.log(x);
console.log(y);


const a = [1,2,3,4];

const b = [5,6,7,8, 9 , 10];

const merge = [...a, ...b];

const [x,y, ...rest] = merge;

console.log(x);
console.log(y);
console.log(rest);

console.log(merge);

const a = [{a: 1}, {b: 2}];
const b = [ {c:3},  {d: 4}];
const ab = [...a, ...b];

console.log(ab);

const x = { z: 0};
const abx = [x, ...ab];
console.log(abx);

const index = abx.findIndex(x=>x.b === 2);
console.log(index);
const newArr = [...abx.slice(0, index), { b: 3 }, ...abx.slice(index + 1)]
const delArr = [...abx.slice(0, index), ...abx.slice(index + 1)]
console.log(newArr);
console.log(delArr);

// const y = {y: 2};
// const abxy = [...abx.slice(0,3), y, ...abx.slice(3) ];
// console.log(abxy);