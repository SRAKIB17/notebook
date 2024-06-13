const emitaz = 5000;
let total = 25000;
const livePreview = 1000;
const extraSoum = 1000 + livePreview;
total -= emitaz + extraSoum;
const perPerson = total / 2;
console.log(perPerson - 1000)
console.log(perPerson - 1000 + extraSoum)