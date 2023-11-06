import React from 'react'
// Title을 전달하기 위해 Context를 작성한다.
const TitleContext = React.createContext('');

const Title = ()=> {
    return (
        <TitleContext.Consumer>
            {(title)=> {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/* Header에서 Title로는 아무런 데이터를 전달하지 않아도 Title에서 잘만씀 */}
            <Title></Title>
        </div>
    )
}

// Page 컴포넌트 안에서 Context에 값을 전다란다.
const Page = () => {
    const title = 'React skrrrr';
    return (
        <TitleContext.Provider value = {title}>
            <Header/>
        </TitleContext.Provider>
    )
}

export default Page;