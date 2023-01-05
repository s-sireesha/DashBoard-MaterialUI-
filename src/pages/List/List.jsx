import React from 'react';
import '../List/List.scss';
import Sidebar from '../../Componenets/sidebar/Sidebar';
import Navabar from '../../Componenets/navbar/Navabar'; 
import Datatable from '../../Componenets/datatable/Datatable';


const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navabar />
        <Datatable />
      </div>
    </div>
  )
}

export default List