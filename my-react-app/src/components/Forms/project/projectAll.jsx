import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProjectAll() {
  const [data, setData] = useState([]);
  const [uname, setUName] = useState("");
  const [ulocation, setULocation] = useState("");
  const [uDescription, setUDescription] = useState("");
  const [editId, setEditId] = useState(-1);

 
  const handleEdit = (id) => {
    axios.get(`http://localhost:4003/project/${id}`)
        .then((res) => {
            console.log(res);
            setUName(res.data.Name);
            setULocation(res.data.location);
            setUDescription(res.data.Description);
        })
        .catch((err) => console.log(err));

    setEditId(id);
};


  const handleUpdate = () => {
    axios.put(`http://localhost:4003/updateproject/${editId}`, {
      id: editId,
      Name: uname,
      location: ulocation,
      Description: uDescription,
    }).then((res) => {
      console.log(res);
      window.location.reload();
      setEditId(-1);
    }).catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4003/deleteproject/${id}`).then((res) => {
      window.location.reload();
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:4003/project')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginLeft: '200px', backgroundColor: ' #e9e9e9', height: 'auto' ,marginTop:'70px'}}>
      <div style={{ padding: '5px' }}>
        <div className="lack" style={{ display: 'flex' }}>
          <div>
            <Link to='/projectcreate'><button className="bg-primary">create</button></Link>
          </div>
          <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '30px', color: 'teal', fontSize: '25px' }}>
            <div style={{ padding: '8px' }}>
              <Link to='/back'><i className="fas fa-home"></i></Link>
            </div>
            <div style={{ padding: '8px' }} >
              menu
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '8px' }}>
        <table className='table  table-bordered table-hover'>
          <thead className='table-'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>LOCATION</th>
              <th>DESCRIPTION</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{editId === product.id ? <input type="text" value={uname} onChange={e => setUName(e.target.value)} /> : product.Name}</td>
                  <td>{editId === product.id ? <input type="text" value={ulocation} onChange={e => setULocation(e.target.value)} /> : product.location}</td>
                  <td>{editId === product.id ? <input type="text" value={uDescription} onChange={e => setUDescription(e.target.value)} /> : product.Description}</td>
                  <td>
                    {editId === product.id ?
                      <>
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={() => setEditId(-1)}>Cancel</button>
                      </>
                      :
                      <>
                        <button className='btn btn-primary' onClick={() => handleEdit(product.id)}>
                          <i className="material-icons">mode_edit</i>
                        </button>
                        <button className='btn btn-danger' onClick={() => handleDelete(product.id)}>
                          <i className="material-icons">delete</i>
                        </button>
                      </>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectAll;
