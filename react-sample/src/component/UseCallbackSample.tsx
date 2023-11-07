import React, {memo, useState} from 'react'

type FizzProps = {
    isFizz : boolean
}

//Fizz는 그냥 함수.
// isFizz의 변화와 관계없이 부뫄가 다시그러지면 Fizz도 다시 그려진다.
const Fizz = (props: FizzProps) => {
    const {isFizz} = props
    console.log(`Fizz가 다시그려짐 isFizz=${isFizz}`);
    return <span>{isFizz ? 'Fizz':''}</span>
}

type BuzzProps = {
    isBuzz : boolean
    onClick: ()=> void
}

//Buzz는 메모제이션한 함수
const Buzz = (props:BuzzProps) =>{
    const {isBuzz,onClick} = props;
    console.log(`Buzz가 다시그려짐 isBuzz=${isBuzz}`);
    return <span onClick={onClick}>{isBuzz ? 'Buzz':''}</span>
}

export const Parent = () => {
    const [count, setCount] = useState(1);
    const isFizz = count % 3 === 0;
    const isBuzz = count % 5 === 0;

    const onBuzzClick = () => {
        console.log('Buzz 가 클릭 isBuzz '+isBuzz);
    }

    console.log(`Parnet 가 다시 그려졌습니다. count=${count}`);
    return (
        <div>
            <button onClick={()=> setCount((prevCount)=>prevCount+1)} >+1</button>
            <p>{`현재 카운트 ${count}`}</p>
            <Fizz isFizz = {isFizz}></Fizz>
            <Buzz isBuzz = {isBuzz} onClick = {onBuzzClick}></Buzz>
        </div>
    )
}

export default Parent