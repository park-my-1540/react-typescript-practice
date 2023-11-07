import React, {useState, useCallback} from "react";
/**
 * React.memo 
 * React.memo +  useCallback
 */
type ButtonProps = {
    onClick : () => void
}

// 그냥 함수
const DecrementButton = (props:ButtonProps) => {
    const {onClick} = props;
    console.log('Decrement RERENDER~');
    return <button onClick={onClick}>Decrement</button>
}

//메모제이션 함수
const IncrementButton = React.memo( (props:ButtonProps) => {
    const {onClick} = props;
    console.log('Increment RERENDER~~~');
    return <button onClick={onClick}>Increment</button>
})

//메모제이션
const DoubleButton = React.memo( (props:ButtonProps) => {
    const {onClick} = props;
    console.log('DoubleButton RERENDER~~~');
    return <button onClick={onClick}>DoubleButton</button>
})

export const Parent = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount((c)=> c-1)
    }
    const Increment = () => {
        setCount((c)=> c+1)
    }

    const Double = useCallback( ()=> {
        setCount((c)=> c*2)
    },[])

    return(
        <div>
            <p>Count : {count}</p>
            <DecrementButton onClick={ decrement}></DecrementButton>
            <IncrementButton onClick={ Increment}></IncrementButton>
            <DoubleButton onClick={ Double}></DoubleButton>
        </div>
    )
}

export default Parent