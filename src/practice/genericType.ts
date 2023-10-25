class Queue<T> {
    private array: T[] = []

    push(item:T){
        this.array.push(item);
    }

    pop(): T | undefined {
        return this.array.shift(); //첫번쨰 배열을 꺼낸다.
    }
}

const queue = new Queue<number>(); //숫자 타입을 다루는 큐 생성.
queue.push(111);
queue.push(222);
// queue.push('foo');

console.log(queue.pop());