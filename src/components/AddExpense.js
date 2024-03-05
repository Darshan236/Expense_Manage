import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CssFiles/Settle.css'; // Import your CSS file

const AddExpense = () => {
    const [groups, setGroups] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchGroups();
    }, []);

    const fetchGroups = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/groups');
            setGroups(response.data);
        } catch (error) {
            console.error('Fetch groups error:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/expenses', {
                group: selectedGroup,
                description,
                amount
            });
            // Handle successful expense addition (e.g., show success message)
            console.log('Expense added successfully:', response.data);
        } catch (error) {
            setError('Failed to add expense. Please try again.');
            console.error('Add expense error:', error);
        }
    };

    return (
        <div className="settle-container"> {/* Apply the 'settle-container' class */}
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-element"> {/* Apply the 'form-element' class */}
                    <label className="label">Select Group:</label> {/* Apply the 'label' class */}
                    <select className="select" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
                        <option value="">Select a group</option>
                        {groups.map(group => (
                            <option key={group.id} value={group.groupName}>{group.groupName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-element"> {/* Apply the 'form-element' class */}
                    <label className="label">Description:</label> {/* Apply the 'label' class */}
                    <input className="input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> {/* Apply the 'input' class */}
                </div>
                <div className="form-element"> {/* Apply the 'form-element' class */}
                    <label className="label">Amount:</label> {/* Apply the 'label' class */}
                    <input className="input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /> {/* Apply the 'input' class */}
                </div>
                {error && <p className="error">{error}</p>} {/* Apply the 'error' class */}
                <button className="button" type="submit">Add Expense</button> {/* Apply the 'button' class */}
            </form>
        </div>
    );
};

export default AddExpense;
