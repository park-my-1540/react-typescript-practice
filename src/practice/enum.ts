// const Direction = {
//     'Up' : 0,
//     'Down' : 1,
//     'Left' : 2,
//     'Right' : 3
// } -> 자바스크립트에선

enum Direction {
    Up,
    Down,
    Left,
    Right
} // => 자동으로 증가하면서 설정됨.

let direction : Direction = Direction.Left;
// direction = 'Left'; // string 이라


enum DirectString {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

const value = 'DsOWN';
const enumVale = value as DirectString;

console.log(enumVale);
console.log(DirectString.Down);
if(enumVale === DirectString.Down){
    console.log('Down is Selected');
}