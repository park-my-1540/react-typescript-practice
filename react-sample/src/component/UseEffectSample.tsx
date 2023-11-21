import {useState,useEffect} from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE' //로컬스토리지에 사용하는 키

enum Locale {
    US = 'en-US',
    KR = 'kr-KR'
}

const getLocaleFromString = (text:string) => {
    switch(text){
        case Locale.US :
            return Locale.US
        case Locale.KR :
            return Locale.KR
        default :
            return Locale.KR
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.KR);

    // 타이머를 설정하기 위한 부가

    //타이머 세팅
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimestamp(new Date())
        },UPDATE_CYCLE)

        //클린업 함수를 전달하고 언마운트 시에 타이머 해제
        return () =>{
            clearInterval(timer)
        }
    },[]) // 초기에만 그리겠다


    //로컬스토리지에서 값을 로딩
    useEffect(()=> {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if(savedLocale !== null){
            setLocale(getLocaleFromString(savedLocale));
        }
        return () =>{
            console.log('dd');
        }
    },[])

    //로케일이 바뀌면 로컬스토리지에 값을 저장
    useEffect(()=>{
        localStorage.setItem(KEY_LOCALE, locale)
        return () =>{
            console.log(locale);
        }
    },[locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재시각</span>
                <span>:{timestamp.toLocaleDateString(locale)}</span>
                <select
                    value = {locale}
                    onChange = {(e)=> setLocale(getLocaleFromString(e.target.value))}>
                        <option value="en-US">en-US</option>
                        <option value="kr-KR">ko-KR</option>
                </select>
            </p>
        </div>
    )
}

export default Clock;