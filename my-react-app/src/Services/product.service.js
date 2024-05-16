import { getData, saveData, updateData } from "./Context.service";

const producttypeURL="http://localhost:3000/product"



export function saveproducttype(data){
    return saveData(producttypeURL,data)
}

export function getProductType(){
    return getData(producttypeURL);
}

export function updateProductType(data){
    return updateData(producttypeURL, data)
}

