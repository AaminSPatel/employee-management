import style from './Header.module.css'
//import { useEffect, useState } from 'react';

function Header(){

    function searchEmployee(term){
      $(".EmployeeCard").show();
      $(".EmployeeCard *").show();
                        var value= term.toLowerCase();
                        $("section").not(function(){
                        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
      });
      $('.RankCards').hide();
      $('#abot').hide();
      $('.ProfesionCards').hide();
      
     };


  function homeClick(){
    $(".EmployeeCard").show();
    $(".EmployeeCard *").show();
    $('#abot').hide();
    $('.ProfesionCards').hide();
    $('.RankCards').hide();
  }
  
  function AboutClick(){
    $('#abot').show();
    $(".EmployeeCard").hide();
    $('.ProfesionCards').hide();
    $('.RankCards').hide();
    console.log('clicked hui he')
  }
function ProfesionClick(){
    $('.ProfesionCards').show();
    $('.ProfesionCards *').show();
    $('#abot').hide();
    $('.EmployeeCard').hide();
    $('.RankCards').hide();
    console.log('clicked hui he')
  }

function RankClick(){
    $('.RankCards').show();
    $('.RankCards *').show();
    $('.ProfesionCards').hide();
    $('#abot').hide();
    $('.EmployeeCard').hide();
    console.log('clicked hui he')
  }


    return(
        
        <header>
             <div className={style.ho}>
          <div className={style.hoo}>
            <h3>EMPLOYER</h3>
          </div>
          <div className={style.hot}>
            <ul>
              <li className={style.litem} onClick={() => homeClick()}><a href="#" className={style.navact}>Home</a></li>
              <li className={style.litemi} id="roleSelect">
                <a href="#"  onClick={()=>ProfesionClick()}>Profession</a>
                <ul className={style.Dropdownlist}>
                  <li onClick={() => searchEmployee('Full-Stack')}>Full-Stack</li>
                  <li onClick={() => searchEmployee('Python')}>Python</li>
                  <li onClick={() => searchEmployee('Java')}>Java</li>
                  <li onClick={() => searchEmployee('React')}>React</li>
                  <li onClick={() => searchEmployee('UI/UX')}>UI/UX</li>
                  <li onClick={() => searchEmployee('Web Designer')}>Designer</li>
                  <li onClick={() => searchEmployee('Flutter ')}>Flutter</li>
                  <li onClick={() => searchEmployee('Android')}>Android</li>
                  <li onClick={() => searchEmployee('Project Manager')}>Manager</li>
                  <li onClick={() => searchEmployee('Wordpress')}>Wordpress</li>
                  <li onClick={() => searchEmployee('Php')}>Php</li>
                  <li onClick={() => searchEmployee('Angular')}>Angular</li>
                  <li onClick={() => searchEmployee('MERN')}>MERN</li>
                  <li onClick={() => searchEmployee('C/C++')}>C/C++</li>
                </ul>
                </li>
              <li className={style.litemRank}>
                <a href="#" onClick={()=>RankClick()}>Ranking</a>
                <ul id="roleSelect" className={style.roleSelect}>
                  <li onClick={() => searchEmployee('1Star')}>Junior</li>
                  <li onClick={() => searchEmployee('2Star')}>Mid-Level</li>
                  <li onClick={() => searchEmployee('3Star')}>Senior</li>
                  <li onClick={() => searchEmployee('4Star')}>Specialist</li>
                </ul>
                </li>
              <li className={style.litem} onClick={() => AboutClick()}><a href="#">About</a></li>
            </ul>
          </div>
        </div>
        </header>
    );
}

export default Header