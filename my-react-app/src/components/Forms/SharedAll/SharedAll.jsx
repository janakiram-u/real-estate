import { Link } from 'react-router-dom';
import './Sharedall.css'
import "bootstrap/dist/css/bootstrap.min.css";
const SharedAll=(props)=>{

    //create function for edit
    function editItem(row){
        props.editItemFromGrid(row)
    }
    //create function for delete
    function deleteItem(row){
    props.deleteItemFromGrid(row)
    }
    return(
        <div style={{marginLeft:'200px',marginTop:'70px',backgroundColor:' #e9e9e9'}}>
            <div style={{padding:'15px'}}>
            <div className="lack" style={{display:'flex'}}>
            <div>
                <button className="bg-primary ">create</button>
            </div>
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
            <div style={{padding:'8px'}}>
            <h3>{props.title}</h3>
            <table className='table  table-border table-hover'>
                <thead className='table-'>
                    <tr>
                        {
                            props.headers.map((item)=><th>{item}</th>)
                        }
                        
                    </tr>
                </thead>
                <tbody>
                
                        {
                            props.body.map((item)=><tr>
                                {Object.values(item).map((item)=><td>{item}</td>)}

                                <td className='databody'>
                                    <button className='btn btn-success 'onClick={()=>{editItem(item)}}><i class="material-icons">mode_edit</i></button> &nbsp;
                                    <button className='btn btn-danger 'onClick={()=>{deleteItem(item)}}><i class="material-icons">delete</i></button>
                                </td>
                                
                                </tr>)
                        }
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default SharedAll ;