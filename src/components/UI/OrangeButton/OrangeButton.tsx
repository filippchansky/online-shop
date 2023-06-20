import React from 'react'
import style from "./orangebutton.module.css"
interface OrangeButtonProps {
    children: React.ReactNode
}

const OrangeButton:React.FC<OrangeButtonProps> = ({children}) => {
    
    return (
        <button className={style.btn}>
            {children}
        </button>
    )
}
export default OrangeButton;