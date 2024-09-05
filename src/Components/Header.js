import React from 'react'

const Header = () => {
    const name = "< Rakesh />"
    return (
        <div className=''>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <span>Home</span>
            </div>
        </div>
    )
}

export default Header