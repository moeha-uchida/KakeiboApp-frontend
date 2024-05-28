import React from 'react';
import Sidebar from "../components/sidebar/Sidebar";

const Edit = () => {

    return (
      <>
      <div className="Sidebar">
          <Sidebar />
        </div>
        <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Adjust main content position */}
        <h1>設定画面にしたいなあ</h1>
      </div>
      </>
    );
  };
  
  export default Edit;