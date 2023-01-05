import React from 'react';
import '../widgets/Widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


const Widget = ({type}) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;

        switch(type){
        case "user":
            data = { 
                title: "users",
                isMoney: false,
                link: "see all users",
                icon: <PersonIcon className='icon' style={{color:"crimson", backgroundColor: "rgba(255,0,0,0.2)"}}/>,
            };
            break;
            case "order":
            data = { 
                title: "orders",
                isMoney: false,
                link: "see all orders",
                icon: <ShoppingCartCheckoutIcon className='icon'style={{color:"goldenrod", backgroundColor: "rgba(218,165,32,0.2)"}}/>,
            };
            break;
            case "earning":
            data = { 
                title: "earnings",
                isMoney: true,
                link: "view net earnings",
                icon: <CurrencyExchangeIcon className='icon'style={{color:"green", backgroundColor: "rgba(0,128,0,0.2)"}}/>,
            };
            break;
            case "balance":
            data={ 
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: <AccountBalanceWalletIcon className='icon' style={{color:"purple", backgroundColor: "rgba(128,0,128,0.2)"}}/>,
            };
            break;
            default:
                break;

    }




  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>


        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
            {/* <PersonIcon className='icon'/> */}
        </div>
    </div>
  )
}

export default Widget