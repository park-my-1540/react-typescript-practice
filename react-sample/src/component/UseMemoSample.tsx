import React, {useMemo,useState} from 'react'
//https://velog.io/@teo_ryu/javascript-reduce-%ED%95%A8%EC%88%98%EC%99%80-%EC%8B%B8%EC%9A%B0%EA%B8%B0
//https://velog.io/@hang_kem_0531/useMemo%EC%99%80-useCallback%EC%9D%98-%EC%B0%A8%EC%9D%B4
const UseMemoSample = () => {
    const [text, setText] = useState('');
    const [items,setItems] = useState<string[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const onClickButton = () => {
        setItems((prev)=>{
            return [...prev,text]
        })
        setText('');
    }

    const numberOfCharacters1 = () =>{
        console.log('numberOfCharacters1');
        return items.reduce( (sub,item)=> sub+ items.length,0)
    }
    const numberOfCharacters2 = useMemo( ()=> {
        console.log('numberOfCharacters2');
        return items.reduce( (sub,item)=> sub+ items.length,0)
    },[items])

    return(
        <div>
            <div>
                <input value={text} onChange={onChangeInput}/>
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map( (item,index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacters1()}</p>
                <p>Total Number of Characters 2: {numberOfCharacters2}</p>
            </div>
        </div>
    )
}

export default UseMemoSample;