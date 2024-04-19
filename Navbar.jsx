import React from "react";
import './Navbar.css';
import book_lg from '../Assets/book_lg.png'
import cart from '../Assets/cart.png'
import search from '../Assets/search.png'




function Navbar() {
    return (
      <div className="Navbar">
        <div className="nav--top">
            <div className="nav-top-left">
                <img src={book_lg} alt="" className="logo"/>
                <h2 className="logo">Secret Bookstore</h2>
            </div>
            <div className="nav--top-right">
                <button>Login</button>
                <button>Sign Up</button>
                <img src={cart} alt="" />
            </div>
        </div>
        <div className="nav--mid">
            <ul>
                <li>Home</li>
                <li>Favorite Book</li>
                <li>Contact</li>
                <li>Testimonial</li>
            </ul>
        </div>
        <div className="nav--bottom">
            <div className="text">
                <h4>Secret <br />Bookstore</h4>
               
                
            </div>
            <div className="input-form">
                <img src={search} alt="" />
                <input type="text" placeholder="Find your articles"/>
            </div>
            <div className="text2">
                <p>Discover:</p>
                <p className="frenq">Secret Book</p>
               
            </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;