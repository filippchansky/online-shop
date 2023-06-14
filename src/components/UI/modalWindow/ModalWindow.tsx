import React from 'react'
import './modalwindow.css'

interface ModalWindowProps {
    active: boolean
    setActive: Function
    children: React.ReactNode
}

const ModalWindow:React.FC<ModalWindowProps> = ({active,setActive,children}) => {
    
    return (
        <div className={active? 'modal active': 'modal'} onClick ={()=> setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default ModalWindow;