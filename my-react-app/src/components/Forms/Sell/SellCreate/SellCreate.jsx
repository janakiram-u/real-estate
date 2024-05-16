
import {  useState,useRef } from "react"
import './SellCreate.css'

import { Link } from "react-router-dom";

export function CreateSell(){

    const CustomerName = useRef();
    const ProjectName = useRef();
    const ProductId = useRef();
    const SellerName=useRef();


    const [saveBtnText,setSaveBtnText]=useState("save")

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            CustomerName: CustomerName.current.value,
            ProjectName: ProjectName.current.value,
            ProductId: ProductId.current.value,
            SellerName: SellerName.current.value
        };

        try {
            const response = await fetch("http://localhost:4003/savesell", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Data saved successfully!");
              
                CustomerName.current.value = "";
                ProjectName.current.value = "";
                ProductId.current.value = "";
                SellerName.current.value="";

               
            } else {
                console.error("Failed to save data.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return(



<form onSubmit={handleSubmit} style={{marginLeft:'200px',backgroundColor:' #e9e9e9',height:'100vh',marginTop:'70px'}}>
            <div style={{padding:'15px'}}>
            <div className="lack" style={{display:'flex'}}>
            <div>
            <Link to='/back'><button className="bg-primary ">Back</button></Link>
            </div>
            <div style={{margin:'auto'}}><h3>CREATE</h3></div>
            <div style={{display:'flex',marginLeft:'auto',marginRight:'30px',color:'orange',fontSize:'25px'}}>
            <div style={{padding:'8px'}}>
                
            <i className="fas fa-home"></i>
            </div>
            <div style={{padding:'8px'}}>
                menu
            </div>
            </div>
        </div>
            </div>
           
            <div className="topedit" style={{margin:'auto',padding:'15px', width:'70%', border:'1px solid black', backgroundColor:'white'}}>
            <div className="top2"> 
        <div className="form-group bodi">
            
            <input type="text" className="form-control edit" placeholder="CustomerName" name="CustomerName" ref={CustomerName}></input>
        </div>
        <div className="form-group bodi " style={{marginLeft:'auto'}}>
           
            <input type="text" className="form-control edit" placeholder="ProjectName" name="ProjectName" ref={ProjectName}></input>
        </div>
        </div>
        <div className="top2"> 
        <div className="form-group bodi">
            
            <input type="text" className="form-control edit" placeholder="ProductId" name="ProductId" ref={ProductId}></input>
        </div>
        <div className="form-group bodi" style={{marginLeft:'auto'}}>
            
            <input type="text" className="form-control edit" placeholder="SellerName" name="SellerName" ref={SellerName}></input>
        </div>
        </div>
       <div className="m-2">
       <input type="submit" value={saveBtnText} className="btn btn-success" />
      
       </div>
       </div>
        </form>
    )
}



