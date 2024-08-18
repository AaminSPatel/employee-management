import {useState,useEffect} from 'react'
import Employee from './Employee.jsx';



//To search for Male
const arrProffesion = [
    'Full-Stack Developer',
    'Python Developer',
    'Java Developer',
    'React Developer',
    'UI/UX Designer',
    'Web Designer',
    'Flutter Developer',
    'Android Developer',
    'Project Manager',
    'Wordpress Developer',
    'Php Developer',
    'Angular Developer',
    'MERN Developer',
    'C/C++ Developer',
]

const arrOfImg = [
    '../assets/log0.jpeg',
    '../assets/log1.jpeg',
    '../assets/log2.jpeg',
    '../assets/log3.jpeg',
    '../assets/log4.jpeg',
    '../assets/log5.jpeg',
    '../assets/log6.jpeg',
    '../assets/log7.jpeg',
    '../assets/log8.png',
    '../assets/log9.png',
    '../assets/log10.jpeg',
    '../assets/log11.png',
    '../assets/log12.jpeg',
    '../assets/log13.jpeg',   
]

const ProfesionData = [
    {   
        profesionId:1,
        title:arrProffesion[0],
        poster:arrOfImg[0],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:2,
        title:arrProffesion[1],
        poster:arrOfImg[1],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:3,
        title:arrProffesion[2],
        poster:arrOfImg[2],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:4,
        title:arrProffesion[3],
        poster:arrOfImg[3],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        male:0,
        female:0,
    },
    {   
        profesionId:5,
        title:arrProffesion[4],
        poster:arrOfImg[4],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:6,
        title:arrProffesion[5],
        poster:arrOfImg[5],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:7,
        title:arrProffesion[6],
        poster:arrOfImg[6],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:8,
        title:arrProffesion[7],
        poster:arrOfImg[7],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        male:0,
        female:0,
    },
    {   
        profesionId:9,
        title:arrProffesion[8],
        poster:arrOfImg[8],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:10,
        title:arrProffesion[9],
        poster:arrOfImg[9],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:11,
        title:arrProffesion[10],
        poster:arrOfImg[10],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:12,
        title:arrProffesion[11],
        poster:arrOfImg[11],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        male:0,
        female:0,
    },
    {   
        profesionId:13,
        title:arrProffesion[12],
        poster:arrOfImg[12],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    {   
        profesionId:14,
        title:arrProffesion[13],
        poster:arrOfImg[13],
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
    },
    
]
//console.log(ProfesionData[0].male + ' male before')
 function genderCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Role === arrProffesion[num]);
        const CountArray = ArrayOfProf.filter(ism => ism.Gender === 'male')
        ProfesionData[num].male = CountArray.length;
        ProfesionData[num].female = ArrayOfProf.length - CountArray.length;
    }
   function TeamCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Role === arrProffesion[num]);
        const CountArrayA = ArrayOfProf.filter(ism => ism.Team === 'A')
        const CountArrayB = ArrayOfProf.filter(ism => ism.Team === 'B')
        const CountArrayC = ArrayOfProf.filter(ism => ism.Team === 'C')
        const CountArrayD = ArrayOfProf.filter(ism => ism.Team === 'D')
        ProfesionData[num].teamA = CountArrayA.length;
        ProfesionData[num].teamB = CountArrayB.length;
        ProfesionData[num].teamC = CountArrayC.length;
        ProfesionData[num].teamD = CountArrayD.length;
    }
    function StarCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Role === arrProffesion[num]);
        const CountArray1 = ArrayOfProf.filter(ism => ism.Rank === '1Star')
        const CountArray2 = ArrayOfProf.filter(ism => ism.Rank === '2Star')
        const CountArray3 = ArrayOfProf.filter(ism => ism.Rank === '3Star')
        const CountArray4 = ArrayOfProf.filter(ism => ism.Rank === '4Star')
        ProfesionData[num].star1 = CountArray1.length;
        ProfesionData[num].star2 = CountArray2.length;
        ProfesionData[num].star3 = CountArray3.length;
        ProfesionData[num].star4 = CountArray4.length;
    }
    
       
for(let i = 0;i<ProfesionData.length;i++){
    genderCount(i);
    TeamCount(i);
    StarCount(i);
}

/*

mmale()*/

export default ProfesionData