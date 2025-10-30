import React from 'react';

const ListIcon = ({elem}) => {
    console.log(elem)
  return (
     <li className="nav-item logo"><a href={elem.url}> <i className={elem.icon}></i></a></li>    
  );
}

export default ListIcon;
