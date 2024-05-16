import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { Login } from "./components/login/Login";
import ProjectAll from "./components/Forms/project/projectAll";
import { Sublayout } from "./components/Forms/sublayout/sublayout";
import { Bodylayout } from "./components/pagebody/bodylayout";
import { CreateProject } from "./components/Forms/project/projectCreate";
import { CreateProduct } from "./components/Forms/Products/Productcreate/productcreate";
import ProductAll from "./components/Forms/Products/ProductAll/productAll";
import SellAll from "./components/Forms/Sell/SellAll/SellAll";
import { CreateSell } from "./components/Forms/Sell/SellCreate/SellCreate";
import PurchaseAll from "./components/Forms/Purchase/PurchaseAll/Purchaseall";
import { CreateRequisition } from "./components/Forms/Purchase/PurchaseCreate/PurchaseCreate";
import { CreateEmployee } from "./components/Forms/Employee/EmployeeCreate/EmployeeCreate";
import EmployeeAll from "./components/Forms/Employee/EmployeeAll/EmployeeAll";
import Profile from "./components/Profile/Profile";


export function AppRouter() {

    return (
        <Routes>
            <Route path='/layout' element={<><Sublayout></Sublayout><Bodylayout></Bodylayout></>}></Route>
            <Route path='/back' element={<><Sublayout></Sublayout><Bodylayout></Bodylayout></>}></Route>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/projectall' element={<><Sublayout></Sublayout><ProjectAll></ProjectAll></>}></Route>
            <Route path='/projectcreate' element={<><Sublayout></Sublayout><CreateProject></CreateProject></>}></Route>
            <Route path='/productall' element={<><Sublayout></Sublayout><ProductAll></ProductAll></>}></Route>
            <Route path='/productcreate' element={<><Sublayout></Sublayout><CreateProduct></CreateProduct></>}></Route>
            <Route path='/sellall' element={<><Sublayout></Sublayout><SellAll></SellAll></>}></Route>
            <Route path='/sellcreate' element={<><Sublayout></Sublayout><CreateSell></CreateSell></>}></Route>
            <Route path='/purchaseall' element={<><Sublayout></Sublayout><PurchaseAll></PurchaseAll></>}></Route>
            <Route path='/purchasecreate' element={<><Sublayout></Sublayout><CreateRequisition></CreateRequisition></>}></Route>
            <Route path='/employeeall' element={<><Sublayout></Sublayout><EmployeeAll></EmployeeAll></>}></Route>
            <Route path='/employeecreate' element={<><Sublayout></Sublayout><CreateEmployee></CreateEmployee></>}></Route>
        </Routes>

    )
}