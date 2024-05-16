import Sidebar from "../Menu/menu";
import { Menutop } from "../Menutop/Menutop";
import { Bodylayout } from "../pagebody/bodylayout";
import './layout.css'
export function Layout(){
    return(

        <div className="bodylayout" >
            <div>
                <Menutop></Menutop>
              
            </div>
            <div><Bodylayout></Bodylayout></div>
            <div>
            <Sidebar></Sidebar>
            
            </div>
            
        </div>
    )
}