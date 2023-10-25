interface IUser {
    name : string;
    age : number;
    sayHello : () => string;// 인수없이 문자열 리턴
}

class User implements IUser {
    name : string;
    age : number;

    constructor(){
        this.name = '';
        this.age = 0;
    }

    sayHello (): string{
        return `안녕하세요. ${this.name}이고 나이는 ${this.age} 입니다.`
    }
}

const user = new User();
console.log(user.sayHello());
user.name = 'Sia';
user.age = 27;
