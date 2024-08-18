import TeamData from './TeamCard/TeamCardData';
import Employee from './Employee.jsx';

const arrTeam = [
    'A',
    'B',
    'C',
    'D',
]



function TemRebote(){
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
}    

export default TemRebote