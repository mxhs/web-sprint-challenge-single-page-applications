import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>Lambda Eats</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link>Help</Link>
            </nav>
        </div>
    )
}

export default Header
