// App.jsx
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import { LineGraph } from "./components/Line";
import { PieGraph } from './components/Pie';
import KakeiboTable from './components/kakeibo_Table/kakeiboTable';


const App = () => {

  return (
    <>
    <div className="Sidebar">
        <Sidebar />
      </div>

      <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Adjust main content position */}
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <div className="App" style={{ width: '50%' }}>
            <LineGraph />
          </div>

          <div className="App" style={{ width: '50%' }}>
            <PieGraph />
          </div>
        </section>

        <div className="App">
          <h1>家計簿一覧</h1>
            <KakeiboTable />
          </div>
      </div>
    </>
  );
};

export default App;

