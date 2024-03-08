import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./CssFiles/Dashboard.css"

const Dashboard = () => {
    const [oweData, setOweData] = useState([]);
    const [ownData, setOwnData] = useState([]);
    const [totalData, setTotalData] = useState([]);
    const [username, setUsername] = useState("");

    return (
        <>
            <Nav />
            <div className='dashboard-container'>
                <div className='rounded-blocks'>
                    <div className='left-section'>
                        
                    </div>
                    <div className='center-section'>
                        <h1 className='Dashboard-uname'>HELLO  <span className="username">{username}</span> !</h1>
                        <div className='button-section'>
                            <Link to='/addexpense'>
                                <button className='action-button1'>Add Expense</button>
                            </Link>
                            <button className='action-button2' >Settle Up</button>
                        </div>
                        <div className='info-boxes'>
                            <div className='info-box total-expense'>
                                <p className='infotext'>Total Expense</p>
                                <p className='infotext'>{totalData}</p>
                            </div>
                            <div className='info-box total-owe'>
                                <p className='infotext'>Total Owe</p>
                                <p className='infotext' style={{ color: "red" }}>{oweData}</p>
                            </div>
                            <div className='info-box your-own'>
                                <p className='infotext'>Your Own</p>
                                <strong><p className='infotext' style={{ color: "green" }}>{ownData}</p></strong>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <div className='activities'>
                            <h2 className='h2'></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
