import React from 'react';
import './skills.css';
import JS from '../../app/docs/js.png';
import REACT from '../../app/docs/react.png';
import HTML from '../../app/docs/html.png';
import CSS from '../../app/docs/css.png';
import REACTNATIVE from '../../app/docs/react-native.png';
import PHOTOSHOP from '../../app/docs/photoshop.png';
import NEXT from '../../app/docs/next.png'

export default function Skills(){
    return(
        <div className='container_skills' >
            <ul className='skills' >
                <li className='skills_js skills_items' >
                    <img src={JS} title='JavaScript' alt='javaScript' />
                </li>
                <li  className='skills_react skills_items'>
                    <img src={REACT} title='React.js' alt="react.js"/>
                </li>
                <li className='skills_native skills_items'>
                    <img src={REACTNATIVE} title='React-Native' alt="react-native"/>
                </li>
                <li className='skills_html skills_items'>
                    <img src={HTML} title='HTML' alt="html"/>
                </li>
                <li className='skills_css skills_items'>
                    <img src={CSS} title='CSS' alt="css"/>
                </li>
                <li className='skills_photoshop skills_items'>
                    <img src={PHOTOSHOP} title='Photoshop' alt="photoshop"/>
                </li>
                <li className='skills_next skills_items'>
                    <img src={NEXT} title='Next.js' alt="next.js"/>
                </li>
            </ul>
        </div>
    )
}