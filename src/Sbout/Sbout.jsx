
import style from './Sbout.module.css'

function Sbout () {

    return(
        <section className={style.s1} id='abot'>
        <div className={style.s11}>
            <div className={style.s111}>
                <img src="../assets/m.png" alt="My image."/>
            </div>
        </div>
        <div className={style.s12}>
                <h3>Know</h3>
                <h2>About Project</h2>
                <hr/>
                <p>
                A Project to Manage and Organize Employee Details.
                We use ReactJS framework to develope this project.This is our second project on react.
                We hope you will like it.
                    </p><br/>
                <p className={style.btngrp}>
                    <button id={style.btnw}><a href="#">Explore More</a></button>
                </p>
                
        </div>  
    </section>
    )
}

        
    


export default Sbout