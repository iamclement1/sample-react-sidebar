import { useState } from 'react'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomePage from '../../Pages/HomePage'

function Sidebar() {

    const [isOpen, setIsOpen] = useState(true)

    return (
    <div className="flex">
        <div className={`${isOpen ? 'w-52' : 'w-20'} duration-300 h-screen bg-dark-purple relative`}>
            <FontAwesomeIcon icon={ faCircleArrowLeft } 
            className={`absolute cursor-pointer -right-3 top-9
            w-7 text-warning text-2xl ${!isOpen && 'rotate-180'}`}
            onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div>
            <HomePage />
        </div>
    </div>
    )
}

export default Sidebar
