import React from 'react';
import "./app.css";
import Perfil from "../../app/docs/perfil.png"

export default function Main() {
    return(
        <div>
            <div className="contianer_main" >
                <section>
                    <h2 id="titulo" >Olá,</h2>
                    <p className="txt">Sou Danilo,desenvolvedor web,eu sou <strong>Front-end</strong> em geral.Tenho 8 meses de experiencia,ainda sou junior,mas gosto de desafios.Eu gosto muito de programacao,voce ver seu aplicativo ou site funcionando e muito bom</p>
                </section>
                <div className="container_perfil" >
                    <img id="perfil" src={Perfil} alt=""/>
                </div>
                <p className="txt_sec">
                    Eu possuo certificados dos cursos feitos.
                    <br/>
                    Procuro ser <strong>Freelancer</strong> por isso o portifolio
                    <br/>
                    e essencial tem um
                </p>
                <div className="container_skills" >
                    <h4>SKILLS</h4>
                </div>
            </div>  
        </div>
    )
}