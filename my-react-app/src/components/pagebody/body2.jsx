import React from 'react';
import './body2.css';
import { Link } from 'react-router-dom';
const Body2 = () => {
  return (
    <div className="row card">

      <div className="head">
        <h2>Quick Access</h2>
      </div>
      <hr></hr>

      <div className="body col">


        <Link to="/projectall" className="btn bg-pink waves-effect" role="button">Project</Link>
        <Link to='/productall' className="btn bg-green waves-effect" role="button"> Product</Link>
        <Link to='/sellall' className="btn bg-amber waves-effect" role="button">Sell</Link>
        <Link to='/purchaseall' className="btn bg-black waves-effect" role="button">Purchase Requisition</Link>

        <Link to='/sellall' className="btn bg-cyan waves-effect" role="button">Purchase Order</Link>

        <Link to='/sellall' className="btn bg-light-green waves-effect" role="button"> Vendor</Link>

        <Link to='/employeeall' className="btn bg-amber waves-effect" role="button">Employee</Link>

        <Link to='/productall' className="btn bg-black waves-effect" role="button">Customer</Link>

        <Link to="/projectall" className="btn bg-teal waves-effect" role="button">Ledger</Link>

        <Link to='/purchaseall' className="btn bg-light-green waves-effect" role="button">Trial Balance</Link>

        <Link to='/sellall' className="btn bg-orange waves-effect" role="button">Cost Of Revenue</Link>

        <Link to='/purchaseall' className="btn bg-deep-purple waves-effect" role="button">Profit Or Loss Account</Link>

        <Link to="/projectall" className="btn bg-blue waves-effect" role="button">Retained Earnings</Link>

        <Link to='/productall' className="btn bg-light-green waves-effect" role="button"> Fixed Asset Schedule</Link>

        <Link to='/purchaseall' className="btn bg-light-blue waves-effect" role="button"> Balance sheet</Link>

        <Link to='/sellall' className="btn bg-cyan waves-effect" role="button">Cash Flow</Link>

        <Link to='/productall' className="btn bg-teal waves-effect" role="button">Receive Payment</Link>

        <Link to='/employeeall' className="btn bg-light-green waves-effect" role="button">Ledger Type</Link>

        <Link to='/productall' className="btn bg-orange waves-effect" role="button"> Ledger Group</Link>

        <Link to='/sellall' className="btn bg-lime waves-effect" role="button">Debit Voucher</Link>

        <Link to='/employeeall'className="btn bg-brown waves-effect" role="button">Credit Voucher</Link>

        <Link to='/productall' className="btn bg-deep-orange waves-effect" role="button">Journal Voucher</Link>

        <Link to='/sellall' className="btn bg-orange waves-effect" role="button">Contra Voucher</Link>
      </div>
    </div>


  );
};

export default Body2;


