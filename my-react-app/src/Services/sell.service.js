import { getData, saveData, updateData } from "./Context.service";

const selltypeURL="http://localhost:3000/sell"


export function saveselltype(data){
    return saveData(selltypeURL,data)
}
export function getsellType(){
    return getData(selltypeURL);
}

export function updatesellType(data){
    return updateData(selltypeURL, data)
}

