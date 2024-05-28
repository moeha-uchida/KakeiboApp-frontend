import React from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import { LineGraph } from '../components/graph/Line';

const Edit = () => {

    return (
      <>
        <div className="Sidebar">
        <Sidebar />
        </div>

        <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Adjust main content position */}
        <h1>来月の目標画面にしたいなあ</h1>
        <div className="App" style={{ width: '50%' }}>
          <h2>今月の支出</h2>
            <LineGraph />
          </div>
          <div>
          <p>ここに書くとどこに行く？</p>
          </div>
      </div>
      </>
    );
  };
  
  export default Edit;