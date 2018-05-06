import React from 'react'

function List(props) {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li
            key={item.id}
            onClick={() => props.toggle && props.toggle(item)}
            style={{ textDecoration: item.complete ? "line-through" : "none" }}
          >
            <span>{item.name}</span>
            <button onClick={() => props.remove(item)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
