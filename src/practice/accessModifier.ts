class BasePoint3D {
    public x :number; //어디서나
    private y :number; // 해당클래스만
    protected z :number; //해당클래스 or 서브클래스
}

const basePoint = new BasePoint3D();
basePoint.x;
basePoint.y;
basePoint.z;

class ChildPoint extends BasePoint3D {
    constructor(){
        super();
        this.x;
        this.y;
        this.z;
    }
}