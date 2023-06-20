import React, { useState } from 'react'
import OrangeButton from '../components/UI/OrangeButton/OrangeButton'

interface TestPostProps {
    
}

const TestPost:React.FC<TestPostProps> = ({}) => {
    // const [value, setValue] = useState({})

    const [imgBase64, setImgBase64] = useState<string | any>('')

    console.log(imgBase64) // формат base64

    const handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>{
            setImgBase64(reader.result)
        }
    }

    const submitPost = (e: React.FormEvent) => {
        e.preventDefault()

    }

    return (
        <div>
            <form action="" >
                <input type="file" 
                onChange = {handleChange}
                />
                <button onClick={submitPost}>отправить</button>
            </form>

        </div>
    )
}
export default TestPost;