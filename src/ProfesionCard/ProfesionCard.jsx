//import React,{useState,useEffect} from 'react';
import style from './ProfesionCard.module.css'


function ProfesionCard({ prof }){
    return(
        <section id='ProfCard'>
            <div className={style.cardContainer}>
            <div className={style.profcardi}>
                <div>
                    <img src={prof.poster} alt={`${prof.title} Image`}/>
                </div>
            </div>
            <div className={style.profcardii}>
                <p className={style.profTitle}>{prof.title}</p>
                <span className={style.profDetaillist}> 
                    <ul>
                        <li><span>Female : </span>{prof.female}</li>
                        <li><span>TeamA :</span>{prof.teamA}</li>
                        <li><span>TeamB :</span>{prof.teamB}</li>
                        <li><span>TeamC :</span>{prof.teamC}</li>
                        <li><span>TeamD :</span>{prof.teamD}</li>
                    </ul>
                    <ul>
                        <li><span>Male :</span>{prof.male}</li>
                        <li><span>Junior :</span>{prof.star1}</li>
                        <li><span>Mid-Level :</span>{prof.star2}</li>
                        <li><span>Senior :</span>{prof.star3}</li>
                        <li><span>Specialist :</span>{prof.star4}</li>
                    </ul>
                </span>
            </div>
        </div>
        </section>
        
    )
}

export default ProfesionCard