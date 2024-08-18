import React,{useState,useEffect} from 'react';
import style from './ICard.module.css'
import TeamData from '../TeamCard/TeamCardData';
import Employee from '../Employee.jsx';

function EmployeeCard({ employee }){
    const [isStar,setIsStar] = useState('');
    const [teem,setTeem] = useState('');
        let TeamValue = 1;
   
   function AddToTeamA(Tem,tem,name){
    for(let i = 0;i<Employee.length;i++){
        if(Employee[i].Name == name){
         
                     if(tem == 'A' && Tem !== tem){

                        Employee[i].Team = Tem;
                        setTeem(Tem);
                        TeamValue = 0;
                    }
                    else if(tem == 'B' && Tem !== tem){
                        //TeamData[1].employees -=TeamValue;
                        //TeamData[0].employees +=TeamValue;
                        Employee[i].Team = Tem;
                        setTeem(Tem);
                        TeamValue = 0;
                    }
                    
                    else if(tem == 'C' && Tem !== tem){
                       // TeamData[2].employees -= TeamValue;
                        //TeamData[0].employees +=TeamValue;
                        Employee[i].Team = Tem;
                        setTeem(Tem);
                        TeamValue = 0;
                    }
                    else if(tem == 'D' && Tem !== tem){
                 
                        Employee[i].Team = Tem;
                        setTeem(Tem);
                        TeamValue = 0;
                        
                    } 
                    
                    //console.log(Employee[i].Team)

        }
    }}
    
    useEffect(() =>{
        if(employee.Rank=='1Star'){
                setIsStar('\u2605')
            }
            else if(employee.Rank=='2Star'){
                setIsStar('\u2605\u2605')
            }
            else if(employee.Rank=='3Star'){
                setIsStar('\u2605\u2605\u2605')
            }
            else{
                setIsStar('\u2605\u2605\u2605\u2605')
            }
            setTeem(employee.Team);
    },[]);

    return(
        <section id='ICard'>
            <div className={style.cardContainer}>
            <div className={style.cardi}>
                <p className={style.starPosition}>
                
                    { 
                     isStar
                    }
                    <span className={style.rankNone}>{employee.Rank}</span>
                    </p>
                <img src={employee.Gender !== 'male' ? '../assets/u3.png' : '../assets/u2.png'} alt="Employee  Image"/>
            </div>
            <div className={style.cardii}>
                <span className={style.EmName}>{employee.Name}</span>
                <span> {employee.Role} </span>
                <span className={style.EmTeam} >Team : <b id='TeamName'>{teem}</b> </span>
            </div>
            <div className={style.backCard}>
                <h2>Add {employee.Name} to</h2>
                <ul>
                    <li onClick={() => AddToTeamA('A',teem,employee.Name)}>Team <span>A</span></li>
                    <li onClick={() => AddToTeamA('B',teem,employee.Name)}>Team <span>B</span></li>
                    <li onClick={() => AddToTeamA('C',teem,employee.Name)}>Team <span>C</span></li>
                    <li onClick={() => AddToTeamA('D',teem,employee.Name)}>Team <span>D</span></li>
                    
                </ul>
            </div>
        </div>
        
        </section>
        
    )
}
export default EmployeeCard