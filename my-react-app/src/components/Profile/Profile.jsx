// UserForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    designation: '',
    gender: '',
    education: '',
    address: '',
    profilePicture: '',
    language: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Update user data logic goes here (you can send it to the server or update state)
    console.log('User data updated:', userData);
  };

  return (
    <div className="container mt-4">
        <div style={{margin:'7px'}}>
            <Link to='/back'> {'<<'}click Here for Main-menu</Link>  </div>

      <div className="row">
      <div className="col-md-6">
          <div className="user-details">
            <h2 style={{marginLeft:'auto'}}>Admin Profile</h2>
            <hr></hr>
            <ul>
              {Object.entries(userData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                value={userData.designation}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="education" className="form-label">
                Education
              </label>
              <input
                type="text"
                className="form-control"
                id="education"
                name="education"
                value={userData.education}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label">
                Profile Picture
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                name="profilePicture"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="language" className="form-label">
                Language
              </label>
              <input
                type="text"
                className="form-control"
                id="language"
                name="language"
                value={userData.language}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
