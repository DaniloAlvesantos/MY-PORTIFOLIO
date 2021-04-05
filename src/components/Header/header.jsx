import React from 'react';
import "./header.css"
// import Logo from "../../app/docs/glasses.png";

export default function Header() {
    return (
        <header className="Header" >
            <div className="container"  >
                <div className="container_items" >
                    <nav className="container_nav" >
                        <li className="lista"><a href="">HOME</a> </li>
                        <li className="lista"><a href="">QUEM EU SOU</a></li>
                        <li className="lista"><a href="">PORTIFOLIO</a></li>
                        <li className="lista"><a href="">ENTRE EM CONTATO</a></li>
                    </nav>
                </div>
            </div>
        </header>
    )
}