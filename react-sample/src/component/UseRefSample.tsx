import React , {useState, useRef} from 'react';

/**
 *  ref 사용법
 *  1. 데이터 저장 : 저장된 값은 업데이트 되더라고 다시그리지 않음. 화면 그리기와 관계없는 데이터 저장시 사용. // fileRef
 *  2. dom 참조 : 이 요소가 마운트 될때 ref.current에 dom 참조가 설정되어 dom 함수 호출 가능  // inputImageRef
 */

const sleep = (ms:number) => new Promise((resolve)=> setTimeout(resolve,ms))
const UPLOAD_DELAY = 5000;
const ImageUploader = () => {

    //숨겨진 input 요소에 접근하기 위한 ref
    const inputImageRef = useRef<HTMLInputElement | null>(null);
    //선택된 파일데이터를 저장하는 ref
    const fileRef = useRef<File|null>(null);

    const [message, setMessage] = useState<string|null>('')

    // 이미지업로드 버튼 클릭시
    const onClickText = () => {
        if(inputImageRef.current !== null ){
            inputImageRef.current.click(); // input의 dom에 접근해서 클릭이벤트 트리거
        }
    }
    //파일이 선택된 후 호출
    const onChangeImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(files !== null && files.length > 0){
            //files.current에 값 저장 current가 변화해도 다시그리기가 발생하지 않는다 >>>>>>>> ref는 저장된 값이 업데이트 되더라도 다시 그리지 않음. 상태를 이용하는게 아닌 ref에서 객체를 참조하므로
            fileRef.current = files[0]
            console.log(fileRef);
        }
    }

    // 업로드 버튼이 클릭됐을 대 호출
    const onClickUpload = async() => { 
        console.log('onClickUpload');
        if(fileRef.current != null){
            // 보통여기서 api 호출하고 파일을 서버에 업로드 의사적으로 일정시간 기다림
            await sleep(UPLOAD_DELAY)
            // 업로드 성공시 메세지 변경
            setMessage(`${fileRef.current.name} 업로드 성공!`)
            console.log(message);
        }
    }

    return (
        <div>
            <p style = {{ textDecoration: 'underline'}} onClick={onClickText}>
                이미지 업로드
            </p>
            <input
                ref = {inputImageRef}
                type="file"
                accept='image/*'
                onChange={onChangeImage}
                style = {{ visibility:'hidden'}}
            />
            <br/>
            <button onClick={onClickUpload}>업로드</button>
            {message != null && <p>{message}</p>}
        </div>
    )
}

export default ImageUploader;