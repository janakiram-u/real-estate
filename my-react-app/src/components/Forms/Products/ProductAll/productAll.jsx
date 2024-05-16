import axios from "axios"
import { useEffect, useState } from "react"
import { Sublayout } from "../../sublayout/sublayout"
import { Menutop } from "../../../Menutop/Menutop"
import { Link } from "react-router-dom"



function  ProductAll(){
const [data,setData]=useState([])



const [uname,usetName]=useState('')
const [uprice,usetPrice]=useState('')
const [usize,usetSize]=useState('')
const [utotal,usetTotal]=useState('')
const [editId,setEditId]=useState(-1)


const handleEdit=(id)=>{
    axios.get(`http://localhost:4003/product/${id}`)
    .then(res  =>{
        console.log(res)
        usetName(res.data.Name)
        usetSize(res.data.Size)
        usetPrice(res.data.Price)
        usetTotal(res.data.Total)
       
    })
.catch(er  =>console.log(er))

setEditId(id)
}

const handleUpdate=() =>{
    axios.put(`http://localhost:4003/updateproduct/${editId}`,{id:editId,Name:uname,Size:usize,Price:uprice,Total:utotal})
.then(res=>{
    console.log(res);
    window.location.reload();
    setEditId(-1)
})
.catch(err =>console.log(err));

}

const handleDelete=(id)=>{
    axios.delete(`http://localhost:4003/deleteproduct/${id}`)
    .then(res  =>{
       
        window.location.reload();
        
       
    })
}


    useEffect(()=>{
axios.get('http://localhost:4003/product')
.then(res  =>setData(res.data))
.catch(er  =>console.log(er))
    },[])
    return(
       

    
            
       
<div style={{marginLeft:'200px',backgroundColor:' #e9e9e9' ,height:'auto',marginTop:'70px'}}>
            <div style={{padding:'15px'}}>
            <div className="lack" style={{display:'flex'}}>
            <div>
                <Link to='/productcreate'><button className="bg-primary ">create</button></Link>
                
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
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Total</th>
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
        <td>{product.Name}</td>
        <td>{product.Size}</td>
        <td>{product.Price}</td>
        <td>{product.Total}</td>
        <td><button className='btn btn-primary' onClick={()=>handleEdit(product.id)}><i class="material-icons">mode_edit</i></button> &nbsp;
        <button className='btn btn-danger' onClick={()=>handleDelete(product.id)}><i class="material-icons">delete</i></button></td>
        

    </tr>))
}
                </tbody>
               
            </table>
        </div>
        </div>
         
    )
}
export default ProductAll





 

  
