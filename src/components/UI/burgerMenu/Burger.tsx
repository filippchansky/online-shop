import React from 'react'
import "./burger.css"

interface BurgerProps {
    children?: React.ReactNode
    active?: boolean
    setActive: Function
}

const Burger:React.FC<BurgerProps> = ({children, active, setActive}) => {
    
    return (
        <div className={active? 'burger active':'burger'}>
            <div className="burger__content">
                <div className="burger__close-btn" onClick={()=>setActive(false)}>
                    <span></span><span></span>
                </div>
                {children}
            </div>
        </div>
    )
}
export default Burger;