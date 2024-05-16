

import Sidebar from '../../Menu/menu'
import { Menutop } from '../../Menutop/Menutop'
import './sublayout.css'
export function Sublayout(){
    return(

        <div className="bodylayout" >
            <div>
                <Menutop></Menutop>
              
            </div>
            
            <div>
            <Sidebar></Sidebar>
            
            </div>
            
        </div>
    )
}