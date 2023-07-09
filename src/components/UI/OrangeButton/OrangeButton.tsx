import React from 'react'
import style from "./orangebutton.module.css"
interface OrangeButtonProps {
    children: React.ReactNode
    onClick: any
}

const OrangeButton:React.FC<OrangeButtonProps> = ({children, onClick}) => {
    
    return (
        <button onClick={onClick} className={style.btn}>
            {children}
        </button>
    )
}
export default OrangeButton;