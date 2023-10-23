type Point = {
    x : number;
    y : number;
}

function printPoint(point:Point){
    console.log(point.x);
    console.log(point.y);
}

printPoint({x:100, y:500});


type Label= {
    [key:string] : string
}

const labels : Label = {
    topTitle : '톱제목',
    subTitle : '서브 제목',
    mainTitle : '메인 제목',
}

const error : Label = {
    message : 100
}