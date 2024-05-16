import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './body1.css'


const InfoBox = ({ bgColor, iconClass, title, count, animationDelay }) => {
  return (
    <div className={`col-lg-3 col-md-3 col-sm-4 col-xs-12`}>
      <div className={`info-box ${bgColor} hover-expand-effect`}>
        <div className="icon">
          <i className={iconClass}></i>
        </div>
        <div className="content">
          <div className="text">
            <h4>{title}</h4>
          </div>
          <div
            className="number count-to"
            data-from="0"
            data-to={count}
            data-speed="1000"
            data-fresh-interval={animationDelay}
          >
            {count}
          </div>
        </div>
      </div>
    
    </div>


  );
};

const Body1 = () => {
  return (
    <div className='body1'>
      <div className="block-head">
      <h2> Dashboard </h2> </div>
    <div className="row clearfix">
      <InfoBox bgColor="bg-pink" iconClass="fas fa-project-diagram" title="Project" count={63} animationDelay={0} />
      <InfoBox bgColor="bg-cyan" iconClass="fas fa-file-invoice-dollar" title="Ledger Type" count={22} animationDelay={20} />
      <InfoBox bgColor="bg-purple" iconClass="fas fa-file-invoice-dollar" title="Ledger Group" count={49} animationDelay={20} />
      <InfoBox bgColor="bg-light-green" iconClass="fas fa-file-invoice-dollar" title="Ledger" count={60} animationDelay={20} />
      <InfoBox bgColor="bg-blue-grey" iconClass="fas fa-university" title="Bank Or Cash" count={9} animationDelay={20} />
      <InfoBox bgColor="bg-orange" iconClass="fas fa-user" title="User" count={7} animationDelay={20} />
      <InfoBox bgColor="bg-red" iconClass="fas fa-user-lock" title="Role Manage" count={7} animationDelay={20} />
      <InfoBox bgColor="bg-brown" iconClass="fas fa-receipt" title="Report" count={14} animationDelay={20} />
    </div>
    </div>
  );
};

export default Body1;

