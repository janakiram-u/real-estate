
import './menu.css';
import React, { useState } from 'react';
import 'material-icons/iconfont/material-icons.css';
import { Menufooter } from '../Menufooter/menufooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faBoxes } from '@fortawesome/free-solid-svg-icons';
import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
const [projectSubMenuOpen, setProjectSubMenuOpen] = useState(false);
const [productSubMenuOpen, setProductSubMenuOpen] = useState(false);
const [sellSubMenuOpen, setSellSubMenuOpen] = useState(false);
const [purchaseSubMenuOpen, setPurchaseSubMenuOpen] = useState(false);
const [vendorSubMenuOpen, setVendorSubMenuOpen] = useState(false);
const [employeeSubMenuOpen, setEmployeeSubMenuOpen] = useState(false);
const [customerSubMenuOpen, setCustomerSubMenuOpen] = useState(false);
const [ledgerSubMenuOpen, setLedgerSubMenuOpen] = useState(false);
const [bankCashSubMenuOpen, setBankCashSubMenuOpen] = useState(false);
const [voucherSubMenuOpen, setVoucherSubMenuOpen] = useState(false);
const [reportSubMenuOpen, setReportSubMenuOpen] = useState(false);
const [languageSubMenuOpen, setLanguageSubMenuOpen] = useState(false);
const [userSubMenuOpen, setUserSubMenuOpen] = useState(false);
const [roleManageSubMenuOpen, setRoleManageSubMenuOpen] = useState(false);
const [settingsSubMenuOpen, setSettingsSubMenuOpen] = useState(false);
const[requisitionSubMenuOpen,setRequisitionSubMenuOpen]=useState(false);
const[rqnConfirmedSubMenuOpen,setRqnConfirmedSubMenuOpen]=useState(false);
const[orderSubMenuOpen,setOrderSubMenuOpen]=useState(false);
const[typeSubMenuOpen,setTypeSubMenuOpen]=useState(false);
const[groupSubMenuOpen,setGroupSubMenuOpen]=useState(false);
const[nameSubMenuOpen,setNameSubMenuOpen]=useState(false);
const [accountsSubMenuOpen, setAccountsSubMenuOpen] = useState(false);
const [generalSubMenuOpen, setGeneralSubMenuOpen] = useState(false);
const [creditSubMenuOpen, setCreditSubMenuOpen] = useState(false);
const [debitSubMenuOpen, setDebitSubMenuOpen] = useState(false);
const [journalSubMenuOpen, setJournalSubMenuOpen] = useState(false);
const [contraSubMenuOpen, setContraSubMenuOpen] = useState(false);


  const toggleSubMenu = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };
  
  return (
   
    <aside id="leftsidebar" className="sidebar">
      <div className="menu">

        <ul className="list">
          <li className='list-item active'>
            
            <Link path='/tl' ><i className="material-icons">dashboard</i>
              <span>Dashboard</span></Link>
          </li>


          <li>
          <a className={`menu-toggle  ${projectSubMenuOpen ? 'toggled' : ''}`} href="javascript:void(0);"
           onClick={() => toggleSubMenu(setProjectSubMenuOpen)}>
          <FontAwesomeIcon icon={faProjectDiagram} />
        <span >project</span><span style={{marginLeft:'auto'}}>{projectSubMenuOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}</span>
        </a>
        <ul className="ml-menu" style={{ display: projectSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <Link to='/projectall' className="waves-effect waves-block">All</Link>
          
          </li>
          <li>
           
            <Link to='/projectcreate'> Create</Link>
          </li>
          <li>
           
            <Link to='/projectall' className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
      </li>
     


      <li >
      <a
        className={`menu-toggle  ${productSubMenuOpen ? 'toggled' : ''}`}  href="javascript:void(0);"
        onClick={() => toggleSubMenu(setProductSubMenuOpen)}>
        <FontAwesomeIcon icon={faBoxes} />
        <span>Product </span><span style={{marginLeft:'auto'}}>{productSubMenuOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}</span>
      </a>
      <ul className="ml-menu" style={{ display: productSubMenuOpen ? 'block' : 'none' }}>
          <li>
          <Link to='/productall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/productcreate'> Create</Link>
          </li>
          <li>
          <Link to='/productall' className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
    </li>
    <li>
        <a
          className={`menu-toggle waves-effect waves-block ${sellSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setSellSubMenuOpen)}
        >
         
          <FontAwesomeIcon icon={faDolly}></FontAwesomeIcon>
          <span>Sell</span><span style={{marginLeft:'auto'}}>
             {sellSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
        </a>
        <ul className="ml-menu" style={{ display: sellSubMenuOpen ? 'block' : 'none' }}>
          <li>
          <Link to='/sellall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/sellcreate'> Create</Link>
          </li>
          <li>
          <Link to='/sellall'  className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
      </li>
      <li>
  <a
    className={`menu-toggle waves-effect waves-block ${purchaseSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setPurchaseSubMenuOpen)}
  >
    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    
    <span>Purchase</span><span style={{marginLeft:'auto'}}>{purchaseSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
  </a>
  <ul className="ml-menu" style={{ display: purchaseSubMenuOpen ? 'block' : 'none' }}>
    {/* Requisition submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${requisitionSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setRequisitionSubMenuOpen)}
      >
        
        <span>Requisition</span><span style={{marginLeft:'auto'}}>
        {requisitionSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: requisitionSubMenuOpen ? 'block' : 'none' }}>
      <li>
          <Link to='/purchaseall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/purchasecreate'> Create</Link>
          </li>
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Trashed</Link>
          </li>
      </ul>
    </li>

    {/* RQN Confirmed submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${rqnConfirmedSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setRqnConfirmedSubMenuOpen)}
      >
        
        <span>RQN Confirmed</span><span style={{marginLeft:'auto'}}>
        {rqnConfirmedSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: rqnConfirmedSubMenuOpen ? 'block' : 'none' }}>
      <li>
          <Link to='/purchaseall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/purchasecreate'> Create</Link>
          </li>
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Trashed</Link>
          </li>
      </ul>
    </li>

    {/* Order submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${orderSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setOrderSubMenuOpen)}
      >
        <span>Order</span><span style={{marginLeft:'auto'}}>
        {orderSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: orderSubMenuOpen ? 'block' : 'none' }}>
      <li>
          <Link to='/purchaseall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/purchasecreate'> Create</Link>
          </li>
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Trashed</Link>
          </li>
      </ul>
    </li>
  </ul>
</li>
    
      <li>
  <a
    className={`menu-toggle waves-effect waves-block ${vendorSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setVendorSubMenuOpen)}
  > <FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon>
  
    <span>Vendor</span><span style={{marginLeft:'auto'}}>
      {vendorSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
  </a>
  <ul className="ml-menu" style={{ display: vendorSubMenuOpen ? 'block' : 'none' }}>
  <li>
          <Link to='/sellall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/sellcreate'> Create</Link>
          </li>
          <li>
          <Link to='/sellall'  className="waves-effect waves-block">Trashed</Link>
          </li>
  </ul>
</li>
<li>
        <a
          className={`menu-toggle waves-effect waves-block ${employeeSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setEmployeeSubMenuOpen)}
        ><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>
          
          <span>Employee</span><span style={{marginLeft:'auto'}}>
          {employeeSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: employeeSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <Link to='/employeeall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/employeecreate'> Create</Link>
          </li>
          <li>
          <Link to='/employeeall'  className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
      </li>
     
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${customerSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setCustomerSubMenuOpen)}
        ><FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
         
          <span>Customer</span><span style={{marginLeft:'auto'}}>
          {customerSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: customerSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <Link to='/sellall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/sellcreate'> Create</Link>
          </li>
          <li>
          <Link to='/sellall'  className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
      </li>
      <li>
  <a
    className={`menu-toggle waves-effect waves-block ${ledgerSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setLedgerSubMenuOpen)}
  ><FontAwesomeIcon icon={faFileInvoiceDollar}></FontAwesomeIcon>
   
    <span>Ledger</span><span style={{marginLeft:'auto'}}>
    {ledgerSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    </span>
  </a>
  <ul className="ml-menu" style={{ display: ledgerSubMenuOpen ? 'block' : 'none' }}>
    {/* Type submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${typeSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setTypeSubMenuOpen)}
      >
        
        <span>Type</span><span style={{marginLeft:'auto'}}>
        {typeSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: typeSubMenuOpen ? 'block' : 'none' }}>
      <li>
            <Link to='/projectall' className="waves-effect waves-block">All</Link>
          
          
        </li>
      </ul>
    </li>

    {/* Group submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${groupSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setGroupSubMenuOpen)}
      >
        
        <span>Group</span><span style={{marginLeft:'auto'}}>
        {groupSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: groupSubMenuOpen ? 'block' : 'none' }}>
      <li>
          <Link to='/sellall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/sellcreate'> Create</Link>
          </li>
          <li>
          <Link to='/sellall'  className="waves-effect waves-block">Trashed</Link>
          </li>
      </ul>
    </li>

    {/* Name submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${nameSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setNameSubMenuOpen)}
      >
       
        <span>Name</span><span style={{marginLeft:'auto'}}>
        {nameSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </a>
      <ul className="ml-menu" style={{ display: nameSubMenuOpen ? 'block' : 'none' }}>
      <li>
          <Link to='/productall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/productcreate'> Create</Link>
          </li>
          <li>
          <Link to='/productall' className="waves-effect waves-block">Trashed</Link>
          </li>
        
      </ul>
    </li>
  </ul>
</li>

      <li>
  <a
    className={`menu-toggle waves-effect waves-block ${bankCashSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setBankCashSubMenuOpen)}
  > <FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon>
   
    <span>Bank Cash</span><span style={{marginLeft:'auto'}}>
    {bankCashSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    </span>
  </a>
  <ul className="ml-menu" style={{ display: bankCashSubMenuOpen ? 'block' : 'none' }}>
  <li>
          <Link to='/employeeall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/employeecreate'> Create</Link>
          </li>
          <li>
          <Link to='/employeeall'  className="waves-effect waves-block">Trashed</Link>
          </li>
  </ul>
</li>

      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${voucherSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setVoucherSubMenuOpen)}
        >
          
          <i className="material-icons">account_balance_wallet</i>
          <span>Voucher</span><span style={{marginLeft:'auto'}}>
          {voucherSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: voucherSubMenuOpen ? 'block' : 'none' }}>
          {/* Credit */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${creditSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setCreditSubMenuOpen)}
            >
              <span><i className="fas fa-arrow-right"></i></span>
              
              <span>Credit</span><span style={{marginLeft:'auto'}}>
              {creditSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              </span>
            </a>
            <ul className="ml-menu" style={{ display: creditSubMenuOpen ? 'block' : 'none' }}>
            
            <li>
          <Link to='/sellall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/sellcreate'> Create</Link>
          </li>
          <li>
          <Link to='/sellall'  className="waves-effect waves-block">Trashed</Link>
          </li>
            </ul>
          </li>

          {/* Debit */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${debitSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setDebitSubMenuOpen)}
            >
              <span><i className="fas fa-arrow-left"></i></span>
              
              <span>Debit</span><span style={{marginLeft:'auto'}}>
              {debitSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              </span>
            </a>
            <ul className="ml-menu" style={{ display: debitSubMenuOpen ? 'block' : 'none' }}>
            <li>
          <Link to='/productall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/productcreate'> Create</Link>
          </li>
          <li>
          <Link to='/productall' className="waves-effect waves-block">Trashed</Link>
          </li>
            </ul>
          </li>

          {/* Journal */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${journalSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setJournalSubMenuOpen)}
            >
              <span><i className="fas fa-arrows-alt-h"></i></span>
              
              <span>Journal</span><span style={{marginLeft:'auto'}}>
              {journalSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              </span>
            </a>
            <ul className="ml-menu" style={{ display: journalSubMenuOpen ? 'block' : 'none' }}>
            <li>
          <Link to='/purchaseall' className="waves-effect waves-block">All</Link>
          </li>
          <li>
          <Link to='/purchasecreate'> Create</Link>
          </li>
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Trashed</Link>
          </li>
            </ul>
          </li>

          {/* Contra */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${contraSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setContraSubMenuOpen)}
            >
              <span> <i className="fas fa-arrows-alt-h"></i></span>
             
              <span>Contra</span><span style={{marginLeft:'auto'}}>
              {contraSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              </span>
            </a>
            <ul className="ml-menu" style={{ display: contraSubMenuOpen ? 'block' : 'none' }}>
            <li>
      <a href="https://demo.erealestate.eaccount.xyz/bank-cash" className="waves-effect waves-block">
        All
      </a>
    </li>
    <li>
      <a href="https://demo.erealestate.eaccount.xyz/bank-cash/create" className="waves-effect waves-block">
        Create
      </a>
    </li>
    <li>
      <a href="https://demo.erealestate.eaccount.xyz/bank-cash/trashed" className="waves-effect waves-block">
        Trashed
      </a>
    </li>
            </ul>
          </li>
        </ul>
      </li>

     
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${reportSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setReportSubMenuOpen)}
        ><FontAwesomeIcon icon={faReceipt} ></FontAwesomeIcon>
          
          
          <span>Report</span><span style={{marginLeft:'auto'}}>
          {reportSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          
          </span>
        </a>
        <ul className="ml-menu" style={{ display: reportSubMenuOpen ? 'block' : 'none' }}>
          {/* Accounts */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${accountsSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setAccountsSubMenuOpen)}
            >
             
              <span>Accounts</span><span style={{marginLeft:'auto'}}>
              {accountsSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              </span>
            </a>
            <ul className="ml-menu" style={{ display: accountsSubMenuOpen ? 'block' : 'none' }}>
            
            <li>
          <Link to='/purchasecreate'> Ledger</Link>
          </li>
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Trail Balance</Link>
          </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/cost-of-revenue" className="waves-effect waves-block">
          Cost Of Revenue
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/profit-or-loss-account" className="waves-effect waves-block">
          Profit Or Loss Account
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/retained-earnings" className="waves-effect waves-block">
          Retained Earnings
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/fixed-asset-schedule" className="waves-effect waves-block">
          Fixed Asset Schedule
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/balance-sheet" className="waves-effect waves-block">
          Balance Sheet
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/cash-flow" className="waves-effect waves-block">
          Cash Flow
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/receive-payment" className="waves-effect waves-block">
          Receive Payment
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/notes" className="waves-effect waves-block">
          Notes
        </a>
      </li>
            </ul>
          </li>

          {/* Sells */}
          <li>
          <Link to='/sellall' className="waves-effect waves-block">Sells</Link>
          </li>

          {/* Purchase */}
          <li>
          <Link to='/purchaseall'  className="waves-effect waves-block">Purchase</Link>
          </li>

          {/* General */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${generalSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setGeneralSubMenuOpen)}
            >
             
              <span>General</span><span style={{marginLeft:'auto'}}> 
              {generalSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
            </a>
            <ul className="ml-menu" style={{ display: generalSubMenuOpen ? 'block' : 'none' }}>
            <li>
          <a href="https://demo.erealestate.eaccount.xyz/reports/general/branch" className="waves-effect waves-block">
            Branch
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/reports/general/ledger" className="waves-effect waves-block">
            Ledger
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/reports/general/bank-cash" className="waves-effect waves-block">
            Bank Cash
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/reports/general/voucher" className="waves-effect waves-block">
            Voucher
          </a>
        </li>
            </ul>
          </li>
        </ul>
      </li>
      
      <li>
      <a
          className={`menu-toggle waves-effect waves-block ${languageSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setLanguageSubMenuOpen)}
        ><FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
         
          <span>Language</span><span style={{marginLeft:'auto'}}>
          {languageSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: languageSubMenuOpen ? 'block' : 'none' }}>
        <li>
            <Link to='/projectall' className="waves-effect waves-block">All</Link>
          
          </li>
          <li>
           
            <Link to='/projectcreate'> Create</Link>
          </li>
          <li>
           
            <Link to='/projectall' className="waves-effect waves-block">Trashed</Link>
          </li>
        </ul>
      </li>

      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${userSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setUserSubMenuOpen)}
        ><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          
          <span>User</span><span style={{marginLeft:'auto'}}>
          {userSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: userSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <Link to='/employeeall'  className="waves-effect waves-block">All</Link>
          </li>
          
        </ul>
      </li>

      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${roleManageSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setRoleManageSubMenuOpen)}
        ><FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon>
          
          <span>Role Manage</span><span style={{marginLeft:'auto'}}>
          {roleManageSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: roleManageSubMenuOpen ? 'block' : 'none' }}>
        <li>
            <Link to='/projectall' className="waves-effect waves-block">All</Link>
          
          </li>
          
        </ul>
      </li>
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${settingsSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setSettingsSubMenuOpen)}
        ><i className="material-icons">settings</i>
         
          <span>Settings</span><span style={{marginLeft:'auto'}}>
          {settingsSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          </span>
        </a>
        <ul className="ml-menu" style={{ display: settingsSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/settings/general" className="waves-effect waves-block">
              General
            </a>
          </li>
         
        </ul>
      </li>
         
        </ul>
        
      </div>
     
      <hr></hr>
     <Menufooter></Menufooter>
      
    </aside>
    
  );
};

export default Sidebar;


