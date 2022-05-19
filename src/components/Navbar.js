import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [active,setActive] = useState(false)

    const handleActive = () => {
        setActive((state)=>!state)
    }
  return (
    <div className="header">
        <div className="container">
            <h1>Crypto<span className="primary">Lookup</span></h1>
            <ul className={active?'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className="btn-group">
                <button className="btn">Connect Wallet</button>
            </div>
            <div className="hamburger" onClick={handleActive}>
                {active? (<FaTimes size={20} style={{color:'#333'}} />) : (<FaBars size={20} style={{color:'#333'}} />)}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar