import React from 'react';

function KakeiboTableRow({ item }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.date}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td>{item.memo}</td>
    </tr>
  );
}

export default KakeiboTableRow;
