import React from 'react';

const ListItem = ({elem}) => {
  return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={elem.url}>{elem.name}</a>
        </li>
  );
}

export default ListItem;
