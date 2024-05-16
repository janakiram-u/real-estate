import { getData, saveData, updateData } from "./Context.service";

const projecttypeURL="http://localhost:4003/project/"
const projectSaveURL="http://localhost:4003/saveproject/"

export function saveprojecttype(data){
    return saveData(projectSaveURL,data)
}

export function getProjectType(){
    return getData(projecttypeURL);
}

export function updateProjectType(data){
    return updateData(projecttypeURL, data)
}

