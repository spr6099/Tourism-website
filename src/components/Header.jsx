import react from 'react'

function Header() {
    let date = new Date();
    let hour = date.getHours();
    let mode = " "
    
    if(hour>8){
        mode = "nightMode"
    } else {
        mode = "dayMode"
    }
 
    
    
    return(
        <header className={`display-flex ${mode}`} >
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