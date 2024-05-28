import React from 'react';
import Sidebar from "../components/sidebar/Sidebar";

const Edit = ({ formData, handleChange, handleSubmit }) => {
    return (
      <>
      <div className="Sidebar">
        <Sidebar />
      </div>
      
      <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Adjust main content position */}
      <h2>記録する</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>memo:</label>
          <textarea name="memo" value={formData.memo} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
      </>
    );
  };
  
  export default Edit;