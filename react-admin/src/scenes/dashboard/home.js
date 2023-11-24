import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="div">
        <div className="text-header">โรงเรียน​บ้านยางเปา​ ห้องเรียนสาขาแม่ระมีดหลวง</div>
        <div className="overlap-group">
          <img alt="map" src={require('../../img/map.png')}/>
          <div className="overlap">
            <div className="text-detail">ไฟฟ้าที่ใช้งานของห้องเรียนทุกห้อง</div>
            <div className="div-wrapper">
              <Link className="power-status" to="/dashboard">245.9 W</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;