/* Union */
type Identity = {
    id : number | string;
    name :string;
}
type Contact = {
    name : string;
    email : string;
    phone : string;
}

type IdentityOrContact = Identity | Contact;

const id : IdentityOrContact = {
    id : '111',
    name : 'Sia'
}

const contact : IdentityOrContact = {
    name : 'Sia',
    email:'asdfasf',
    phone :'01234'
}

/*  Intersection 모두 선언해줘야함. */
type Employee = Identity & Contact;
const employee : Employee = {
    id : '111',
    name : 'sia',
    email : 'asdfg',
    phone : '01234'
}

function compare (a:string, b:string) : -1 | 0| 1{
    return a==b? 0 : a>b? 1: -1;
}