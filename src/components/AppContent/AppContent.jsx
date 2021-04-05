import React from 'react';
import Header from '../Header/header';
import Main from "../main/main"
import './App.css'

export default function AppContent() {
    return(
        <div className='container'>
            <Header/>
            <Main/>
        </div>
    )
}