import React from 'react';
import Chart from '../../Componenets/chart/Chart';
import Featured from '../../Componenets/featured/Featured';
import Navabar from '../../Componenets/navbar/Navabar';
import Sidebar from '../../Componenets/sidebar/Sidebar';
import Widget from '../../Componenets/widgets/Widget';
import TableData from '../../Componenets/table/TableData';
import '../Home/Home.scss';

const Home = () => {
  return (
    <div className='home'>
        {/* <h1 className='title'>Hello Admin</h1> */}
        <Sidebar/>
        <div className="homeContainer">
          <Navabar/>
          <div className="widgets">
            <Widget type='user'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            <Widget type='balance'/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Last 6 Months(Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <TableData />
          </div>
        </div>
    </div>
  )
}

export default Home