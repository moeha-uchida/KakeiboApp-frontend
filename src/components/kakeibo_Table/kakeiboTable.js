import React, { useEffect, useState } from 'react';
import KakeiboTableRow from './kakeiboTableRow';
import './kakeibo.css';

function KakeiboTable() {
  const [kakeiboData, setKakeiboData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/kakeibo')
      .then(response => response.json())
      .then(data => setKakeiboData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    // テーブル構成をバックエンドと合わせる必要あり！！
    <table className='kakeibo'> 
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Category</th>
          <th>Price</th>
          <th>Memo</th>
        </tr>
      </thead>
      <tbody>
        {kakeiboData.map((item) => (
          <KakeiboTableRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default KakeiboTable;
