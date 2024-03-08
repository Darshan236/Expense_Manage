import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav";

const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [expenses, setExpenses] = useState([]);
    const [selectedGroupName, setSelectedGroupName] = useState('');

     return (
        <>
          <Nav />
          <style>{/* Your CSS styles here */}</style>
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
                        {/* Render expense details */}
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
export default Groups;
