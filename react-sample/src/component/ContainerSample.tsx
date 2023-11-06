//Container는 빨간색 배경의 박스 안에 제목과 자식 요소를 표시.

type ContainerProps = {
    title: string,
    children : React.ReactNode
}

// + 
const Container = (props : ContainerProps):JSX.Element => {
// const Container = (props : {title:string; children : React.ReactElement} ) => {
    const {title, children} = props;

    return(
        <div style={{background : 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello Sia">
            <p><p>이부분이 children</p><p>이부분이 children</p><p>이부분이 children</p></p>
        </Container>
    )
}

export default Parent;