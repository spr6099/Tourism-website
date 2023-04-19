import react from 'react'

function Header() {
    return(
        <header className='display-flex'>
        <div className='logo'>Logo</div>
        <ul className='nav display-flex'>
            <li> <a href="">Home</a> </li>
            <li> <a href="">About</a> </li>
            <li> <a href="">Contact</a> </li>
        </ul>
        </header>
    )
}

export default Header