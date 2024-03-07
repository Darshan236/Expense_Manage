import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import "./CssFiles/Group.css"

const Dashboard = ({ moneymanager }) => {
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [selectedGroupName, setSelectedGroupName] = useState('');

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const uname = localStorage.getItem('uname');
            const response = await axios.get(`http://localhost:8080/api/groups`);
            const filteredGroups = response.data.filter(group => group.members.includes(uname));
            setGroups(filteredGroups);
        } catch (error) {
            console.error('Fetch groups error:', error);
        }
    };

    const handleGroupClick = async (groupId, groupName) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/${groupId}/expenses`);
            setExpenses(response.data);
            setSelectedGroup(groupId);
            setSelectedGroupName(groupName);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    return (
        <>
          <Nav />
          <style>
            {`
              .dashboard-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 80vh;
                width: 60%;
                margin: auto;
                background-color: #f5f5f5;
              }

              .rounded-blocks {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                width: 100%;
                display: flex;
              }

              .left-section {
                flex: 1;
                height: 80%; /* Decreased height */
            }

            .center-section {
                flex: 4;
                padding: 40px;
            }

            .right-section {
                flex: 2; /* Increased width */
                height: 80%; /* Increased height */
                background-color: #f8f9fa;
            }

              .activities {
                padding: 20px;
                overflow-y: auto;
                max-height: 400px;
              }

              .expense-box {
                border: 2px solid #ccc;
                padding: 10px;
                margin-bottom: 20px;
                border-radius: 5px;
              }

              .expense-box > div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
              }

              .expense-box p {
                margin: 5px 0;
              }

              .group-list {
                list-style-type: none;
                padding: 0;
              }

              .group-list li {
                cursor: pointer;
                padding: 10px;
                margin: 5px;
                border-radius: 5px;
                transition: background 0.3s ease;
              }

              .group-list li:hover {
                background-color: #007bff;
                color: #fff;
              }

              .action-button3 {
                padding: 10px 20px;
                margin-top: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
              }

              .action-button3:hover {
                background-color: #0056b3;
              }
            `}
          </style>
          <div className='dashboard-container'>
            <div className='rounded-blocks'>
              <div className='left-section'>
                
              </div>
              <div className='center-section'>
                <div className='activities'>
                  <h2>Expenses for Group {selectedGroupName}</h2>
                  <ul>
                    {expenses.map(expense => (
                      <div key={expense.id} className="expense-box">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <div>
                            <p><strong>Description:</strong></p>
                            <p>{expense.description}</p>
                          </div>
                          <div>
                            <p><strong>Amount:</strong></p>
                            <p>{expense.amount}</p>
                          </div>
                          <div>
                            <p><strong>Date:</strong></p>
                            <p>{expense.createdAt.toString()}</p>
                          </div>
                          <div>
                            <p><strong>Paid By:</strong></p>
                            <p>{expense.paidBy}</p>
                          </div>
                        </div>
                        <table>
                          <thead>
                            <tr>
                              <th>Member</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(expense.amounts).map(([member, amount]) => (
                              <tr key={member}>
                                <td><strong>{member}</strong></td>
                                <td>{amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
      
              <div className='right-section'>
                <div>
                  <h2>Groups</h2>
                  <ul className="group-list h2">
                    {groups.map(group => (
                      <li
                        key={group.id}
                        onClick={() => handleGroupClick(group.id, group.groupName)}
                      >
                        {group.groupName}
                      </li>
                    ))}
                  </ul>
                </div>
      
                <Link to='/addgroup'>
                  <button className='action-button3'>Add Group</button>
                </Link>
      
              </div>
      
            </div>
          </div>
        </>
      );      
}

export default Dashboard;
