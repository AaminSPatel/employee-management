//import React,{useState,useEffect} from 'react';
import style from './TeamCard.module.css'


function ProfesionCard({ team }){
    return(
        <section id='ProfCard'>
            <div className={style.cardContainer}>
            <div className={style.profcardi}>
                <div>
                    <h1><small>Team </small>{team.title}</h1>
                </div>
            </div>
            <div className={style.profcardii}>
                <p className={style.temEmployee}>Total Employees {team.employees}</p>
                <span className={style.profDetaillist}> 
                    <ul>
                        <li><span>Female: </span>{team.female}</li>
                        <li><span>Junior : </span>{team.star1}</li>
                        <li><span>Senior : </span>{team.star3}</li>
                    </ul>
                    <ul>
                        <li><span>Male :</span>{team.male}</li>
                        <li><span>Mid-Level :</span>{team.star2}</li>
                        <li><span>Specialist :</span>{team.star4}</li>
                    </ul>
                </span>
            </div>
        </div>
        </section>
        
    )
}

export default ProfesionCard