import { useEffect, useState } from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import ICard from './ICard/ICard.jsx'
import Employee from './Employee.jsx'
import Sbout from './Sbout/Sbout.jsx'
import ProfesionCard from './ProfesionCard/ProfesionCard.jsx';
import ProfesionData from './ProfesionData.jsx';
import RankCard from './RankCard/RankCard.jsx';
import RankData from './RankCard/RankCardData.jsx';
import { FaSearch } from 'react-icons/fa';

//8b74d305 


function App() {
  const [Idd,setIdd] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  //const [emp,setEmp] = useState('');
  const [prof,setProf] = useState([]);
  const [rank,setRank] = useState([]);
  
  function searchEmployee(term){
        $(".EmployeeCard").show()
        $(".EmployeeCard *").show()
        var value= term.toLowerCase();
        $(".EmployeeCard section").not(
          function(){
          $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
        });
        setSearchTerm('');
        $('#abot').hide();
        $('.ProfesionCards').hide();
        $('.RankCards').hide();
        
    };
   
   //console.log(Employee.map((emp,_) => emp.indexOf(v2)))
    useEffect(() =>{
      setIdd(Employee)
      //setProf(ProfesionData);
      //setRank(RankData);
    $('#abot').hide();
    $('.ProfesionCards').hide();
    $('.RankCards').hide();
    $(".EmployeeCard").show()
    //console.log($('#TeamName').text())
    //setEmp(Employee.Team)
    },[]);
    
    useEffect(() => {
      setProf(ProfesionData);
      setRank(RankData);
    },[RankData],[ProfesionData])
    
  return(
    <>
    <Header/>
    <div className="searchContainer">
      <div className="searchbar">
        <input type="search" placeholder='Search employee' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
           
          />
          <FaSearch style={{height:'25px',width:'25px',textAlign:'center'}}/> 
      </div>
      <div className="navbtn">
        <ul>
          <li onClick={() => searchEmployee('Team : A')}>Team A</li>
          <li onClick={() => searchEmployee('Team : B')}>Team B</li>
          <li onClick={() => searchEmployee('Team : C')}>Team C</li>
          <li onClick={() => searchEmployee('Team : D')}>Team D</li>
        </ul>
      </div>
    </div>
    <Sbout></Sbout>
    <div className="EmployeeCard">
      
        {
            Idd.map((Employ,index) => <ICard employee={ Employ} key={index}/>) 
        }
        
    </div>
    <div className="ProfesionCards">
      {
            prof.map((profe,index) => <ProfesionCard prof={profe} key={index}/>) 
        }
    </div>
    
    <div className="RankCards">
          {   
                rank.map((ran,index) => <RankCard ran={ran} key={index}/>) 
            }
    </div>
    
    <Footer/>
    
    </>
  );
}

export default App
