/* 이름없는 함수로 컴포넌트를 정의하고, Text라는 변수에 대입한다. */

const Text = (props: {content:string}) => {
    const {content} = props;
    return <p className = "text">{content}</p>
}

const Message = () => {
    const content1 = 'This is parent';
    const content2 = 'Im child'
    return (
        <div>
            <Text content = {content1}/>
            <Text content = {content2}/>
        </div>
    )
}

export default Message