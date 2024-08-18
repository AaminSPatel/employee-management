import style from '../TeamCard/TeamCard.module.css'


import React,{useState,useEffect} from 'react';
import styl from './RankCard.module.css'


function RankCard({ ran }){
const [rank,setRank] = useState(ran);

useEffect(() => {
    setRank(ran)
})
    return(
        <section id='RankCard'>
            <div className={style.cardContainer}>
            <div className={style.profcardi}>
                <div>
                    <h2 className={styl.rankHeading}>{(rank.title)}</h2>
                </div>
            </div>
            <div className={style.profcardii}>
                <p className={style.temEmployee} id={styl.rankEmployee}><span className={styl.rankTag}>{rank.ranktag} </span> <br /> Total Employees {rank.employees}</p>
                <span className={style.profDetaillist}> 
                    <ul>
                        <li><span>Female :</span>{rank.female}</li>
                        <li><span>TeamA :</span>{rank.teamA}</li>
                        <li><span>TeamC :</span>{rank.teamC}</li>
                    </ul>
                    <ul>
                        <li><span>Male :</span>{rank.male}</li>
                        <li><span>TeamB :</span>{rank.teamB}</li>
                        <li><span>TeamD :</span>{rank.teamD}</li>
                    </ul>
                </span>
            </div>
        </div>
        </section>
        
    )
}

export default RankCard