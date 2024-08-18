import Employee from '../Employee.jsx';



//To search for Male
const arrTeam = [
    'A',
    'B',
    'C',
    'D',
]

const TeamData = [
    {   
        teamId:1,
        title:arrTeam[0],
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        employees:0,
    },
    {   
        teamId:2,
        title:arrTeam[1],
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        employees:0,
    },
    {   
        teamId:3,
        title:arrTeam[2],
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        employees:0,
    },
    {   
        teamId:4,
        title:arrTeam[3],
        male:0,
        female:0,
        star1:0,
        star2:0,
        star3:0,
        star4:0,
        employees:0,
    },
    
]
//console.log(ProfesionData[0].male + ' male before')
 function genderCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Team === arrTeam[num]);
        const CountArray = ArrayOfProf.filter(ism => ism.Gender === 'male')
        TeamData[num].employees = ArrayOfProf.length;
        TeamData[num].male = CountArray.length;
        TeamData[num].female = ArrayOfProf.length - CountArray.length;
    }
   

    function StarCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Team === arrTeam[num]);
       TeamData[num].star1= ArrayOfProf.filter(ism => ism.Rank === '1Star').length
       TeamData[num].star2 = ArrayOfProf.filter(ism => ism.Rank === '2Star').length;
       TeamData[num].star3 = ArrayOfProf.filter(ism => ism.Rank === '3Star').length;
       TeamData[num].star4 = ArrayOfProf.filter(ism => ism.Rank === '4Star').length;
        // = ArrayOfProf.filter(ism => ism.Rank === '1Star')        
    }
    
       
for(let i = 0;i<TeamData.length;i++){
    genderCount(i);
    StarCount(i);
}

/*

mmale()*/

export default TeamData