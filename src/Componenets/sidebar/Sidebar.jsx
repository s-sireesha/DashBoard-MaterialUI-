import React, { useContext } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SellIcon from '@mui/icons-material/Sell';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';

// import {PersonIcon, LocalShippingIcon} from "@mui/icons-material"
const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to = "/" style={{textDecoration:"none"}}>
            <span className="logo">lamadmin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
            <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to = "/user" style={{textDecoration:"none"}}>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to = "/products" style={{textDecoration:"none"}}>
                <li>
                    <ProductionQuantityLimitsIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <SellIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Status</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/>
                    <span>Notificatons</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <ImportantDevicesIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li> 
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <ManageAccountsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>Logout</span>
                </li>
                
            </ul>
        </div>
        <div className="button">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            
        </div>
    </div>
  )
}

export default Sidebar