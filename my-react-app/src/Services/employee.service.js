import { getData, saveData, updateData } from "./Context.service";

const employeetypeURL="http://localhost:3000/employee/"



export function saveemployeetype(data){
    return saveData(employeetypeURL,data)
}

export function getemployeeType(){
    return getData(employeetypeURL);
}

export function updateemployeeType(data){
    return updateData(employeetypeURL, data)
}

