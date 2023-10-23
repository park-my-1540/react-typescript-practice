"use strict";
function getBirdsInfo(name) {
    console.log('getBirdsInfo' + name);
    return name.split(','); // ['오리','비둘기']
}
//함수타입을 사용하는구나 인자쪽에선
function singBirds(birdInfo) {
    console.log('singBirds');
    console.log(birdInfo('오리, 비둘기')[0]);
    return birdInfo('오리, 비둘기')[0] + '꽥꽤';
}
console.log(singBirds(getBirdsInfo));
// console.log(singBirds('참새'));
