import React from 'react';
import "./index.css";
import {LineChart} from '../../component/LineChart'
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
    <div>
        <div className='div-text'>
            <Link  className='btn btn-primary' to="/">หน้าแรก</Link>
        </div>
        <div className='graph'>
            <LineChart/>
        </div>
    </div>
    )
}

export default Dashboard;