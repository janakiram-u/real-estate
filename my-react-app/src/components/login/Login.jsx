import{useForm} from 'react-hook-form';
import React, { useState } from 'react';
import './login.css'
import login from '../../Assests/images/login.png'
import { EnvelopeFill, LockFill } from 'react-bootstrap-icons';
import { getLoginData } from '../../Services/Login.service';
import { useNavigate } from 'react-router-dom';

export function Login(){
const navigate=useNavigate();


function getLoginUsers(event) {
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  getLoginData()
  .then((res)=>{
    let filterData=res.data.filter((item,index,array)=>item.email==email && item.password==password)
    if(filterData.length>0){
      alert('log in successful');
     navigate("/layout")
    }
    else {
      alert('user not found-- try again')
    }
  })
  .catch((ex)=>{
    alert(ex.message)
  })
}


    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const [inputValue, setInputValue] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return(
      
        <div className="contain-box"> 
        <div className='wrap-login'>
        <div className='back'>
      <img className="w-50 h-50 image"  src={login} alt="Company Logo" />
    </div>
    <span className=" p-b-34 p-t-20 login">Log in</span>
    <form className='styles' onSubmit={handleSubmit((event)=>{getLoginUsers(event)})}>
    <div className='mb-2 input-group '  >
    
          <EnvelopeFill className="cl" style={{color:'white'}} />
          
          
            <input type="text" className="input100  "
            {...register('email',{required:true, 
              pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email'
              }
          })}
          
            placeholder="E-mailAddress " id='email' 
            
            
            name="email"
            value={inputValue}
            onChange={handleInputChange}
            style={{ border: 'none', background: 'none', outline: 'none' , borderBottom: '2px solid white'}}></input>
             {errors.email && errors.email.type==="required" ? <label className='text-danger'>please enter your email</label>:
            errors.email && errors.email.message? <label className='text-danger'>{errors.email.message}</label> :" " }
            </div>

            
            <div className=' input-group mb-3'>
            
          <LockFill className="cl" style={{color:'white'}}/>
    
            
          
        
             <input type="password" className="input100 "
             {...register('password',{required:true})}
             placeholder="password" 
             id="password"
             name="password"
             value={password}
             onChange={handlePasswordChange}
             style={{ border: 'none', background: 'none', outline: 'none', borderBottom: '2px solid white'}}></input>
              {errors && errors.password? <alert className="text-danger">Enter your password</alert>: ""}  
            </div>
            <div className='input-group mt-1 mb-2'>
                <input type="checkbox" /> &nbsp;  &nbsp;
                <label  style={{color:"white" ,fontFamily: 'Poppins-Regular' ,cursor: 'pointer'}}>Remember me</label>
            </div >
            <div className="butn mb-5">
             <button type="submit" className="login100-form-btn" >
                  Login
                </button>
               
              </div>
    <div className="text-center mt-2 p-b-30 ">

      <table className="table table-bordered table-sm table-hover table-info">
        <thead>
          <tr>
            <th colSpan="2">Demo Login</th>
          </tr>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>janakiram@gmail.com</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>madhu@gmail.com</td>
            <td>12345</td>
          </tr>
          <tr>
            <td>synergy@gmail.com</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>task@gmail.com</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>admin@gmail.com</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>demo@gmail.com</td>
            <td>1234</td>
          </tr>
        </tbody>
      </table>
    </div>

           




            </form>

        </div>
        </div>




    )
        }