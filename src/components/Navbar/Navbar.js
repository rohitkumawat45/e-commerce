import React from 'react'
import { Link } from 'react-router-dom'
import { HiUser } from 'react-icons/hi'
import logo from '../../assests/logo.png'
import './navbar.css'
import { useSelector } from 'react-redux';

export default function Navbar() {

    const items = useSelector((state)=> state.cart);

    return (
        <div className='navbar'>
            <div className='left'>
                <img src={logo} alt="logo" />
            </div>
            <div className="center">
                <div className="links" ><Link to="/">Home</Link></div>
                <div className="links" ><Link to="/category">Category</Link></div>
            </div>
            <div className='right'>
                    <div>
                    <Link to="/user"><HiUser size={25} /></Link>
                    </div>
                <div className='cart'><Link to="/cart">Cart Items : {items.length}</Link>
                </div>
                    {/* <span>Cart Items : 0</span> */}
            </div>
        </div>
    )
}
