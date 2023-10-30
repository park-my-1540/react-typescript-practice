/**
 *  지정한건 null일 수 없어 그러니 타입스크립트는 불평말도록 해! 의미
 *  !. 붙이면
 *  ?. 존재하는가 
 */
function processUser(user?: User2){
    let s = user!.name;
}

interface User2{
    name: string
    social?: {
        facebook : boolean
        twitter : boolean
    }
}

let user2 : User2

user2 = {
    name:'Sia'
}