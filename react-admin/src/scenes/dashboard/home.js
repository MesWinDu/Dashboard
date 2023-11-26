import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function Home() {
  const [date,setDate] = useState(new Date());
  const day = date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  
  useEffect(() => {
      const timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  return (
    <div className="app">
      <div className="div">
        <div className="text-header">โรงเรียน​บ้านยางเปา​ ห้องเรียนสาขาแม่ระมีดหลวง</div>
        <div className='sub-body'>
          <aside class="sidebar">
            <h5>{day}</h5>
            <h5>{date.toLocaleTimeString()}</h5>
          </aside>
          <div className="overlap-group">
            <div className="overlap">
              <div className="text-detail">ปริมาณไฟฟ้าที่ใช้งานของห้องเรียนทุกห้อง</div>
              <Link className="div-wrapper" to="/dashboard">
                245.9 W
              </Link>
            </div>
            <div class="hide">I am shown when someone hovers over the div above.</div>
            <img alt="map" src={require('../../img/map.png')}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;