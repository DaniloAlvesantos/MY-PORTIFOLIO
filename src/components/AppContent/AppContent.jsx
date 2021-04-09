import React from 'react';
import Header from '../Header/header';
import Main from "../main/main"
import Skills from '../skills/Skills';
import './App.css'

export default function AppContent() {
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    )
}