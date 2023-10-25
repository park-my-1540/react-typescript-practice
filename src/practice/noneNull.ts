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