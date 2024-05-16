
import {  useState,useRef } from "react"
import './EmployeeCreate.css'
import { Link } from "react-router-dom";

export function CreateEmployee(){

    const Name = useRef();
    const Phone = useRef();
    const Email = useRef();
    const Department=useRef();


    const [saveBtnText,setSaveBtnText]=useState("save")
        const handleSubmit = async (event) => {
            event.preventDefault();
    
            const formData = {
                Name :  Name.current.value,
            Phone : Phone.current.value,
            Email : Email.current.value,
            Department: Department.current.value,
            };
    
            try {
                const response = await fetch("http://localhost:4003/saveemployee", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    console.log("Data saved successfully!");
                  
                    Name.current.value = "";
            Phone.current.value = "";
            Email.current.value = "";
            Department.current.value="";
    
                   
                } else {
                    console.error("Failed to save data.");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
    
    


    return(



<form onSubmit={handleSubmit} style={{marginLeft:'200px',height:'100vh',backgroundColor:' #e9e9e9 '}}>
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
           
            <div className="topedit" style={{margin:'auto',padding:'15px', width:'70%', border:'1px solid black', backgroundColor:'white',marginTop:'70px'}}>
            <div className="top2"> 
        <div className="form-group bodi">
            
            <input type="text" className="form-control edit" placeholder="Name" name="Name" ref={Name}></input>
        </div>
        <div className="form-group bodi " style={{marginLeft:'auto'}}>
           
            <input type="text" className="form-control edit" placeholder="Phone" name="Phone" ref={Phone}></input>
        </div>
        </div>
        <div className="top2"> 
        <div className="form-group bodi">
            
            <input type="text" className="form-control edit" placeholder="Email" name="Email" ref={Email}></input>
        </div>
        <div className="form-group bodi" style={{marginLeft:'auto'}}>
            
            <input type="text" className="form-control edit" placeholder="Department" name="Department" ref={Department}></input>
        </div>
        </div>
       <div className="m-2">
       <input type="submit" value={saveBtnText} className="btn btn-success" />
      
       </div>
       </div>
        </form>
       
    )
}



