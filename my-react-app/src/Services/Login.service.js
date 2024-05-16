import { getData } from "./Context.service"
const loginURL='http://localhost:4003/login';

export function getLoginData(){
    return getData(loginURL)

}