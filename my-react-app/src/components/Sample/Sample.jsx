import React, { useState } from 'react';
import './sample.css'

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
    <ul className="list" style={{ overflow: 'hidden', width: 'auto', height: '464px' }}>
      <li className="active">
        <a href="https://demo.erealestate.eaccount.xyz" className="toggled waves-effect waves-block">
          <i className="material-icons">dashboard</i>
          <span>Dashboard</span>
        </a>
      </li>

      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${projectSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setProjectSubMenuOpen)}
        >
          
          <span>Project  </span>{projectSubMenuOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </a>
        <ul className="ml-menu" style={{ display: projectSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/project" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/project/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/project/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${productSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setProductSubMenuOpen)}
        >
          {productSubMenuOpen ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
          <span>Product</span>
        </a>
        <ul className="ml-menu" style={{ display: productSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/product" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/product/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/product/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>

      

      
      {/* Sell */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${sellSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setSellSubMenuOpen)}
        >
          {sellSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Sell</span>
        </a>
        <ul className="ml-menu" style={{ display: sellSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/sell" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/sell/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/sell/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>


{/* Purchase */}
<li>
  <a
    className={`menu-toggle waves-effect waves-block ${purchaseSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setPurchaseSubMenuOpen)}
  >
    {purchaseSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    <span>Purchase</span>
  </a>
  <ul className="ml-menu" style={{ display: purchaseSubMenuOpen ? 'block' : 'none' }}>
    {/* Requisition submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${requisitionSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setRequisitionSubMenuOpen)}
      >
        {requisitionSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>Requisition</span>
      </a>
      <ul className="ml-menu" style={{ display: requisitionSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_requisition" className="waves-effect waves-block">
            All
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_requisition/create" className="waves-effect waves-block">
            Create
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_requisition/trashed" className="waves-effect waves-block">
            Trashed
          </a>
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
        {rqnConfirmedSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>RQN Confirmed</span>
      </a>
      <ul className="ml-menu" style={{ display: rqnConfirmedSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/requisition_confirmed" className="waves-effect waves-block">
            All
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/requisition_confirmed/create" className="waves-effect waves-block">
            Create
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/requisition_confirmed/trashed" className="waves-effect waves-block">
            Trashed
          </a>
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
        {orderSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>Order</span>
      </a>
      <ul className="ml-menu" style={{ display: orderSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_order" className="waves-effect waves-block">
            All
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_order/create" className="waves-effect waves-block">
            Create
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/purchase_order/trashed" className="waves-effect waves-block">
            Trashed
          </a>
        </li>
      </ul>
    </li>
  </ul>
</li>






{/* Vendor */}
<li>
  <a
    className={`menu-toggle waves-effect waves-block ${vendorSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setVendorSubMenuOpen)}
  >
    {vendorSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    <span>Vendor</span>
  </a>
  <ul className="ml-menu" style={{ display: vendorSubMenuOpen ? 'block' : 'none' }}>
    <li>
      <a href="https://demo.erealestate.eaccount.xyz/vendor-all" className="waves-effect waves-block">
        All
      </a>
    </li>
    <li>
      <a href="https://demo.erealestate.eaccount.xyz/vendor/create" className="waves-effect waves-block">
        Create
      </a>
    </li>
    <li>
      <a href="https://demo.erealestate.eaccount.xyz/vendor/trashed" className="waves-effect waves-block">
        Trashed
      </a>
    </li>
  </ul>
</li>




      {/* Employee */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${employeeSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setEmployeeSubMenuOpen)}
        >
          {employeeSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Employee</span>
        </a>
        <ul className="ml-menu" style={{ display: employeeSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/employee" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/employee/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/employee/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>

      {/* Customer */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${customerSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setCustomerSubMenuOpen)}
        >
          {customerSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Customer</span>
        </a>
        <ul className="ml-menu" style={{ display: customerSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/customer" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/customer/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/customer/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>

{/* Ledger */}
<li>
  <a
    className={`menu-toggle waves-effect waves-block ${ledgerSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setLedgerSubMenuOpen)}
  >
    {ledgerSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    <span>Ledger</span>
  </a>
  <ul className="ml-menu" style={{ display: ledgerSubMenuOpen ? 'block' : 'none' }}>
    {/* Type submenu */}
    <li>
      <a
        className={`menu-toggle waves-effect waves-block ${typeSubMenuOpen ? 'toggled' : ''}`}
        href="javascript:void(0);"
        onClick={() => toggleSubMenu(setTypeSubMenuOpen)}
      >
        {typeSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>Type</span>
      </a>
      <ul className="ml-menu" style={{ display: typeSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/type" className="waves-effect waves-block">
            All
          </a>
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
        {groupSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>Group</span>
      </a>
      <ul className="ml-menu" style={{ display: groupSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/group" className="waves-effect waves-block">
            All
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/group/create" className="waves-effect waves-block">
            Create
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/group/trashed" className="waves-effect waves-block">
            Trashed
          </a>
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
        {nameSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        <span>Name</span>
      </a>
      <ul className="ml-menu" style={{ display: nameSubMenuOpen ? 'block' : 'none' }}>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/name" className="waves-effect waves-block">
            All
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/name/create" className="waves-effect waves-block">
            Create
          </a>
        </li>
        <li>
          <a href="https://demo.erealestate.eaccount.xyz/ledger/name/trashed" className="waves-effect waves-block">
            Trashed
          </a>
        </li>
      </ul>
    </li>
  </ul>
</li>






{/* Bank Cash */}
<li>
  <a
    className={`menu-toggle waves-effect waves-block ${bankCashSubMenuOpen ? 'toggled' : ''}`}
    href="javascript:void(0);"
    onClick={() => toggleSubMenu(setBankCashSubMenuOpen)}
  >
    {bankCashSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
    <span>Bank Cash</span>
  </a>
  <ul className="ml-menu" style={{ display: bankCashSubMenuOpen ? 'block' : 'none' }}>
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





{/* Voucher */}
<li>
        <a
          className={`menu-toggle waves-effect waves-block ${voucherSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setVoucherSubMenuOpen)}
        >
          {voucherSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <i className="material-icons">account_balance_wallet</i>
          <span>Voucher</span>
        </a>
        <ul className="ml-menu" style={{ display: voucherSubMenuOpen ? 'block' : 'none' }}>
          {/* Credit */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${creditSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setCreditSubMenuOpen)}
            >
              {creditSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <i className="fas fa-arrow-right"></i>
              <span>Credit</span>
            </a>
            <ul className="ml-menu" style={{ display: creditSubMenuOpen ? 'block' : 'none' }}>
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

          {/* Debit */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${debitSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setDebitSubMenuOpen)}
            >
              {debitSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <i className="fas fa-arrow-left"></i>
              <span>Debit</span>
            </a>
            <ul className="ml-menu" style={{ display: debitSubMenuOpen ? 'block' : 'none' }}>
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

          {/* Journal */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${journalSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setJournalSubMenuOpen)}
            >
              {journalSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <i className="fas fa-arrows-alt-h"></i>
              <span>Journal</span>
            </a>
            <ul className="ml-menu" style={{ display: journalSubMenuOpen ? 'block' : 'none' }}>
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

          {/* Contra */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${contraSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setContraSubMenuOpen)}
            >
              {contraSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <i className="fas fa-arrows-alt-h"></i>
              <span>Contra</span>
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








      {/* Report */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${reportSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setReportSubMenuOpen)}
        >
          {reportSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <i className="fas fa-receipt"></i>
          <span>Report</span>
        </a>
        <ul className="ml-menu" style={{ display: reportSubMenuOpen ? 'block' : 'none' }}>
          {/* Accounts */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${accountsSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setAccountsSubMenuOpen)}
            >
              {accountsSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <span>Accounts</span>
            </a>
            <ul className="ml-menu" style={{ display: accountsSubMenuOpen ? 'block' : 'none' }}>
            
          <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/ledger" className="waves-effect waves-block">
          Ledger
        </a>
      </li>
      <li>
        <a href="https://demo.erealestate.eaccount.xyz/reports/accounts/trial-balance" className="waves-effect waves-block">
          Trial Balance
        </a>
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
            <a href="https://demo.erealestate.eaccount.xyz/report/sells/party-ledger" className="waves-effect waves-block">
              <span>Sells</span>
            </a>
          </li>

          {/* Purchase */}
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/report/purchase" className="waves-effect waves-block">
              <span>Purchase</span>
            </a>
          </li>

          {/* General */}
          <li>
            <a
              className={`menu-toggle waves-effect waves-block ${generalSubMenuOpen ? 'toggled' : ''}`}
              href="javascript:void(0);"
              onClick={() => toggleSubMenu(setGeneralSubMenuOpen)}
            >
              {generalSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
              <span>General</span>
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


      {/* Language */}
      <li>
      <a
          className={`menu-toggle waves-effect waves-block ${languageSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setLanguageSubMenuOpen)}
        >
          {languageSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Language</span>
        </a>
        <ul className="ml-menu" style={{ display: languageSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/language" className="waves-effect waves-block">
              All
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/language/create" className="waves-effect waves-block">
              Create
            </a>
          </li>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/language/trashed" className="waves-effect waves-block">
              Trashed
            </a>
          </li>
        </ul>
      </li>

      {/* User */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${userSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setUserSubMenuOpen)}
        >
          {userSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>User</span>
        </a>
        <ul className="ml-menu" style={{ display: userSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/user" className="waves-effect waves-block">
              All
            </a>
          </li>
          {/* Add submenu items for User if needed */}
        </ul>
      </li>

      {/* Role Manage */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${roleManageSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setRoleManageSubMenuOpen)}
        >
          {roleManageSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Role Manage</span>
        </a>
        <ul className="ml-menu" style={{ display: roleManageSubMenuOpen ? 'block' : 'none' }}>
          <li>
            <a href="https://demo.erealestate.eaccount.xyz/role-manage" className="waves-effect waves-block">
              All
            </a>
          </li>
          {/* Add submenu items for Role Manage if needed */}
        </ul>
      </li>

      {/* Settings */}
      <li>
        <a
          className={`menu-toggle waves-effect waves-block ${settingsSubMenuOpen ? 'toggled' : ''}`}
          href="javascript:void(0);"
          onClick={() => toggleSubMenu(setSettingsSubMenuOpen)}
        >
          {settingsSubMenuOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
          <span>Settings</span>
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
    </aside>
  );
};

export default Sidebar;

       

   
