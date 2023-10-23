interface Colorful {
    color: string;
}

interface Circle {
    radius : number;
}

interface ColorfulCircle extends Colorful, Circle {

}

const cc : ColorfulCircle = {
    color:'빨강',
    radius : 10
}

/**
 * 인터페이스는 확장성 o  클래스, 함수 등 다 됨
 * 타입앨리어스 확장성 x  오직 객체만
 */