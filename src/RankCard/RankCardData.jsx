import Employee from '../Employee.jsx';



//To search for Male
const arrRank = [
    '1Star',
    '2Star',
    '3Star',
    '4Star',
]

const RankData = [
    {   
        rankId:1,
        title:'\u2605',
        ranktag:'Junior',
        male:0,
        female:0,
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        employees:0,
    },
    {   
        rankId:2,
        title:'\u2605 \u2605',
        ranktag:'Mid-Level',
        male:0,
        female:0,
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        employees:0,
    },
    {   
        rankId:3,
        title:'\u2605 \u2605 \u2605',
        ranktag:'Senior',
        male:0,
        female:0,
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        employees:0,
    },
    {   
        rankId:4,
        title:'\u2605 \u2605 \u2605 \u2605 ',
        ranktag:'Specialist',
        male:0,
        female:0,
        teamA:0,
        teamB:0,
        teamC:0,
        teamD:0,
        employees:0,
    },
    
]
//console.log(ProfesionData[0].male + ' male before')
 function genderCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Rank === arrRank[num]);
        const CountArray = ArrayOfProf.filter(ism => ism.Gender === 'male')
        RankData[num].employees = ArrayOfProf.length;
        RankData[num].male = CountArray.length;
        RankData[num].female = ArrayOfProf.length - CountArray.length;
    }
   

    function TeamCount(num){ 
        const ArrayOfProf = Employee.filter(emp => emp.Rank === arrRank[num]);
       RankData[num].teamA= ArrayOfProf.filter(ism => ism.Team === 'A').length
       RankData[num].teamB = ArrayOfProf.filter(ism => ism.Team === 'B').length;
       RankData[num].teamC = ArrayOfProf.filter(ism => ism.Team === 'C').length;
       RankData[num].teamD = ArrayOfProf.filter(ism => ism.Team === 'D').length;
        // = ArrayOfProf.filter(ism => ism.Rank === '1Star')        
    }
    
       
for(let i = 0;i<RankData.length;i++){
    genderCount(i);
    TeamCount(i);
}

/*

mmale()*/

export default RankData