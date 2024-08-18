import ProfesionData from "./ProfesionData";
const arrProf= [
    'Full-Stack Developer','Python Developer','Mern Developer'
]

function MaleCounts(id){
    let count = 0;
    for(let i = 0;i<ProfesionData.length;i++){
        const idmatch = ProfesionData.filter(pro => pro[i].profesionId === id)
        if(idmatch){
        const isProf = Employee.filter(ipf => ipf.Role === arrProf[ProfesionData.profesionId]);
        console.log(isProf.length)
    }
    }
    return count;
}

const numCount = [
    MaleCounts(1),
]

export default numCount