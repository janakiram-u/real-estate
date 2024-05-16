import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import fig from '../../Assests/images/fig.png'
import fig2 from '../../Assests/images/fig2.png'
import './body3.css'

const Body3 = () => {
  // State variables for branch and year selection
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Dummy data for branch and year options
  const branchOptions = [
    { value: 0, label: 'Select branch' },
    { value: 1, label: 'Head Office' },
    { value: 2, label: 'Rajshahi Branch' },
    { value: 3, label: 'Sirajgonj Branch' },
    { value: 4, label: 'Bogra Branch' },
    { value: 6, label: 'Borno3' },
    { value: 7, label: '7_Sarker Tower' },
    { value: 8, label: 'Jegan' },
    { value: 9, label: 'Narayanganj' },
    { value: 10, label: 'Relic Tower' },
    { value: 11, label: 'adoni' },
    { value: 12, label: 'Dhaka' },
    { value: 13, label: 'kothi' },
  ];

  const yearOptions = [
    { value: 0, label: 'Select year' },
    { value: 1, label: '2030' },
    { value: 2, label: '2029' },
    { value: 3, label: '2028' },
    { value: 4, label: '2027' },
    { value: 5, label: '2026' },
    { value: 6, label: '2025' },
    { value: 7, label: '2024' },
    { value: 8, label: '2023' },
    { value: 9, label: '2022' },
    { value: 10, label: '2021' },
    { value: 11, label: '2020' },
    { value: 12, label: '2019' },
    { value: 13, label: '2018' },
   
  ];

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      borderBottom: state.isFocused ? '2px solid #3366ff' : '2px solid blue',
      borderRadius: '0',
      boxShadow: 'none',
      
    }),
    option: (provided, state) => ({
      ...provided,
      
      backgroundColor: state.isSelected ? '#3366ff' : state.isHovered ? '#f0f0f0' : 'white',
      color: state.isSelected ? 'white' : 'black',
      ':hover': {
        backgroundColor: '#f0f0f0',
      },


      
    }),
    indicatorSeparator: () => ({
        display: 'none',
        fontSize: '13px'
      }),

      menu: (provided, state) => ({
        ...provided,
        width: '300px',
        '::-webkit-scrollbar': {
            width: '25px',} // Set the desired width for the dropdown menu
      }),
  };

  useEffect(() => {

  }, [selectedBranch, selectedYear]);

  return (

    
    <div className='graphs'>
        <div className='leftgraph'>
    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
      <div className="card3">
        <div className="header">
          <div className="row rows">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text" style={{marginLeft:'15px'}}>
              <h2>Profit Or Loss</h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{marginLeft:'-20px'}}>
           
              <div className="form-group form-float"  >
                <Select
                  options={branchOptions}
                  value={selectedBranch}
                  onChange={(selectedOption) => setSelectedBranch(selectedOption)}
                  placeholder="Select branch"
                  styles={selectStyles}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          
              <div className="form-group form-float">
                <Select
                  options={yearOptions}
                  value={selectedYear}
                  onChange={(selectedOption) => setSelectedYear(selectedOption)}
                  placeholder="Select year"
                  styles={selectStyles}
                />
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="body">
          {/* Chart */}
         <img src={fig}></img>
        </div>
      </div>
    </div>
    </div>
    <div className='rightgraph'>
     <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
     <div className="card3">
       <div className="header">
         <div className="row rows">
           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text">
             <h2>Total voucher</h2>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          
             <div className="form-group form-float">
               <Select
                 options={branchOptions}
                 value={selectedBranch}
                 onChange={(selectedOption) => setSelectedBranch(selectedOption)}
                 placeholder="Select branch"
                 styles={selectStyles}
               />
             </div>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
         
             <div className="form-group form-float">
               <Select
                 options={yearOptions}
                 value={selectedYear}
                 onChange={(selectedOption) => setSelectedYear(selectedOption)}
                 placeholder="Select year"
                 styles={selectStyles}
               />
             </div>
           </div>
         </div>
       </div>
       <hr></hr>
       <div className="body">
         {/* Chart */}
        <img src={fig2}></img>
       </div>
     </div>
   </div>
   </div>
   </div>
  );
};

export default Body3;

