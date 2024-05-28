import React from 'react';
import Sidebar from "../components/sidebar/Sidebar";
/*CSSのインポート*/
import './KakeiboForm.css';

const KakeiboFormView = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
    <div className="Sidebar">
        <Sidebar />
    </div>

    <div style={{ marginLeft: '250px', padding: '20px' }}> {/* Adjust main content position */}
      <h2>記録する</h2>

      <form onSubmit={handleSubmit}>
         <div className='price'>{/*一番上にPriceの入力ボックスを持ってきたよ　className="priceを追加"*/}
          <label>Price:</label>
          <input type="number" name="price"  onChange={handleChange} required />
        </div>

        <div className='content'>{/*className=contentを追加。categoryとdateを丸ごと管理するため*/}
        <div className='date'>{/*className="dateを追加"*/}
          <label>Date:</label>
          <input type="date" name="date" onChange={handleChange} required />
        </div>

        <div className='category'>{/*className="categoryを追加"*/}
          <label>Category:</label>
          <input type="text" name="category" onChange={handleChange} required />
        </div>
        </div>

        <div className='memo'>{/*className="memoを追加"*/}
          <p>memo</p>{/*ここlabelをpタグに変えてます。変えるとデータベースとの連携がうまくいかん…とのことならもどしてください。*/}
          <textarea name="memo" onChange={handleChange} />
        </div>

        <button  className="submit" type="submit">登録する！</button>{/*中身を「登録する！」に変更*/}

      </form>
    </div>
    </>
  );
};

export default KakeiboFormView;
