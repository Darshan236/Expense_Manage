import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import "./CssFiles/AddExpense.css"

const AddExpense = () => {
    const [groups, setGroups] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [groupMembers, setGroupMembers] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState('');
    const [equallySplit, setEquallySplit] = useState(true);
    const [amounts, setAmounts] = useState({});
    const [error, setError] = useState('');
    const [selectedGroupEntity,setSelectedGroupEntity]=useState([]);
    return (
        <>
        <Nav/>
        <div className='dashboard-container'>
            <div className='rounded-blocks'>
                <div className='left-section'>
                </div>
                <div className='center-section'>
                    <h2 className='h2'>Add Expense</h2>
                    <form>
                        <div className="form-element">
                            <label className="label h2">Select Group:</label>
                            <select className="select" value={selectedGroup}>
                                <option value="">Select a group</option>
                                {groups.map(group => (
                                    <option key={group.id} value={group.id}>{group.groupName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-element">
                            <label className="label h2">Description:</label>
                            <input className="input" type="text" value={description}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="form-element">
                            <label className="label h2">Amount:</label>
                            <input className="input" type="number" value={amount}
                                   onChange={(e) => setAmount(e.target.value)}/>
                        </div>
                        <div className="form-element">
                            <label className="label h2">Paid By</label>
                            {equallySplit ? (
                                <div>
                                    <input
                                        type="checkbox"
                                        id="equallySplitCheckbox"
                                        checked={equallySplit}
                                       
                                    />
                                    <label htmlFor="equallySplitCheckbox" className='h2'>Equally Split</label>
                                </div>
                            ) : (

                                <>
                                    <div>
                                        <input
                                            type="checkbox"
                                            id="equallySplitCheckbox"
                                            checked={equallySplit}
                                           
                                        />
                                        <label htmlFor="equallySplitCheckbox" className='h2'>Equally Split</label>
                                    </div>
                                    {groupMembers.map(member => (
                                        <div key={member} className="checkbox h2">
                                            <input
                                                type="checkbox"
                                                id={member}
                                                value={member}
                                                checked={selectedMembers.includes(member)}

                                            />
                                            <label htmlFor={member}>{member}</label>
                                            <input
                                                type="number"
                                                placeholder="Amount"
                                            />
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button className="button" type="submit">Add Expense</button>
                    </form>
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
};

export default AddExpense;
