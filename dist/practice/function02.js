"use strict";
function getBirdsInfo(name) {
    return name.split(',');
}
function singBirds(birdInfo) {
    return birdInfo('오리, 비둘기')[0] + '꽥꽤';
}
console.log(singBirds(getBirdsInfo));
console.log(singBirds('참새'));
