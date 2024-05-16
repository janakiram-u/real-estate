import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function  PurchaseAll(){
const [data,setData]=useState([])



const [uname,usetName]=useState('')
const [uprice,usetPrice]=useState('')
const [usize,usetSize]=useState('')
const [utotal,usetTotal]=useState('')


const [editId,setEditId]=useState(-1)
const handleEdit=(id)=>{
    axios.get(`http://localhost:4003/purchase/${id}`)
    .then(res  =>{
        console.log(res)
        usetName(res.data.RequisitionId)
        usetSize(res.data.ProjectName)
        usetPrice(res.data.EmployeeName)
        usetTotal(res.data.RequisitionAmount)
       
    })
.catch(er  =>console.log(er))

setEditId(id)
}

const handleUpdate=() =>{
    axios.put(`http://localhost:4003/updatepurchase/${editId}`,{id:editId,RequisitionId:uname,ProjectName:usize,EmployeeName:uprice,RequisitionAmount:utotal})
.then(res=>{
    console.log(res);
    window.location.reload();
    setEditId(-1)
})
.catch(err =>console.log(err));

}

const handleDelete=(id)=>{
    axios.delete(`http://localhost:4003/deletepurchase/${id}`)
    .then(res  =>{
       
        window.location.reload();
        
       
    })
}


    useEffect(()=>{
axios.get('http://localhost:4003/purchase')
.then(res  =>setData(res.data))
.catch(er  =>console.log(er))
    },[])
    return(
        

<div style={{marginLeft:'200px',backgroundColor:' #e9e9e9' ,height:'auto',marginTop:'70px'}}>
            <div style={{padding:'15px'}}>
            <div className="lack" style={{display:'flex'}}>
            <div>
            <Link to='/purchasecreate'><button className="bg-primary ">create</button></Link>
            </div>
        
            <div style={{display:'flex',marginLeft:'auto',marginRight:'30px',color:'teal',fontSize:'25px'}}>
            <div style={{padding:'8px'}}>
                
            <Link to='/back'><i className="fas fa-home"></i></Link>
            </div>
            <div style={{padding:'8px'}}>
                menu
            </div>
            </div>
        </div>
            </div>
            <div style={{padding:'8px'}}>
            
            <table className='table  table-bordered table-hover'>
            <thead>
            <tr>
                    <th>ID</th>
                    <th>RequisitionId</th>
                    <th>ProjectName</th>
                    <th>EmployeeName</th>
                    <th>RequisitionAmount </th>
                    <th>OPTIONS</th>
                </tr>
                </thead>
                <tbody>
                
                {
    data.map((product,index)=>(
    product.id===editId ?
    <tr>
        <td>{product.id}</td>
        <td><input type="text" value={uname} onChange={e =>usetName(e.target.value)}></input></td>
        <td><input type="text" value={usize} onChange={e =>usetSize(e.target.value)}></input></td>
        <td><input type="text" value={uprice} onChange={e =>usetPrice(e.target.value)}></input></td>
        <td><input type="text" value={utotal} onChange={e =>usetTotal(e.target.value)}></input></td>
        <td><button onClick={handleUpdate}>Update</button>
        <button onClick={() => setEditId(-1)}>Cancel</button></td>
    </tr>


    :
    <tr key={index}>
        <td>{product.id}</td>
        <td>{product.RequisitionId}</td>
        <td>{product.ProjectName}</td>
        <td>{product.EmployeeName}</td>
        <td>{product.RequisitionAmount }</td>
        <td><button className="btn btn-primary" onClick={()=>handleEdit(product.id)}><i class="material-icons">mode_edit</i></button> &nbsp;
        <button className="btn btn-danger" onClick={()=>handleDelete(product.id)}><i class="material-icons">delete</i></button></td>
        

    </tr>))
}
                </tbody>
               
            </table>
        </div>
        </div>


    )
}
export default PurchaseAll





