/**
 * keyof 연산자 : 해당타입이 가진 각 속성의 타입이 Union 타입을 반환.
 */

interface User4{
    name:string;
    age:number;
    email:string;
}

type UserKey = keyof User4

const key1:UserKey = 'name';
const key2:UserKey = 'email';
//const key3:UserKey = 'phone'; 

function getProperty<T, K extends keyof T>(obj:T,key:K):T[K] {
    return obj[key]
}

const user5 : User4 = {
    name: 'SIA',
    age:27,
    email:'abcd'
}

const userName = getProperty(user5, 'email');
// const userGender = getProperty(user, 'gender');

console.log(userName);