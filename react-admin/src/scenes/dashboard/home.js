import React, {useState, useContext, useEffect} from 'react';
import "./home.css";
import { Link } from "react-router-dom";
import { fetchData } from '../../fetchData.js';
import { gauge } from '../../component/gauge.js';
import GaugeChart from 'react-gauge-chart'

function Home() {
  const [date,setDate] = useState(new Date());
  const day = date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  // const {powerconsumption} = useContext(fetchData);
  const {power} = useContext(fetchData);

  // useEffect(()=>{
  //   powerconsumption()
  // })
  
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
              {power} W
              </Link>
            </div>
            <div class="hide">I am shown when someone hovers over the div above.</div>
            {/* <img alt="map" src={require('../../img/map.png')}/> */}
            <div className='div-graph'>
              <div className='sub-graph'>
                <GaugeChart id="gauge-chart1"
                  nrOfLevels={1} 
                  percent={power/250} 
                  animate = {false}
                  hideText={true}
                  style={{height: '50px' }}
                />
                <div className='text-box'>
                  <text>ศักย์ไฟฟ้า</text>
                </div>
                <div className='status-box'>
                  <text className='status-text'>{power} V</text>
                </div>
              </div>
              <div className='sub-graph'>
                <GaugeChart id="gauge-chart1"
                  nrOfLevels={1} 
                  percent={power/250} 
                  animate = {false}
                  hideText={true}
                  style={{height: '50px' }}
                />
                <div className='text-box'>
                  <text>กระแสไฟฟ้า</text>
                </div>
                <div className='status-box'>
                  <text className='status-text'>{power} A</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;