import { getData, saveData, updateData } from "./Context.service";

const purchasetypeURL="http://localhost:3000/purchase"


export function savepurchasetype(data){
    return saveData(purchasetypeURL,data)
}
export function getpurchaseType(){
    return getData(purchasetypeURL);
}

export function updatepurchaseType(data){
    return updateData(purchasetypeURL, data)
}

