import React, { useState } from 'react';
import axios from "axios";
import './CssFiles/AddGroup.css' // Import CSS file for styling

const AddGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [memberName, setMemberName] = useState('');
    const [members, setMembers] = useState([]);

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleMemberNameChange = (e) => {
        setMemberName(e.target.value);
    };

    const handleAddMember = () => {
        if (memberName.trim() !== '') {
            setMembers([...members, memberName.trim()]);
            setMemberName('');
        }
    };

    const handleRemoveMember = (index) => {
        const updatedMembers = [...members];
        updatedMembers.splice(index, 1);
        setMembers(updatedMembers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add Group
            const groupResponse = await axios.post('http://localhost:8080/api/addgroup', { groupName });
            console.log("Group added successfully! " + groupName);

            // Add Members to Group
            const groupId = groupResponse.data.id; // Assuming the API returns the ID of the newly created group
            await axios.post(`http://localhost:8080/api/addmembers`, { groupId, members });
            console.log("Members added to group successfully!");

            // Reset state after successful submission
            setGroupName('');
            setMembers([]);
            console.log("State reset successfully!");
        } catch (error) {
            console.error('Error during Add Group:', error);
        }
    };

    return (
        <div className="addGroupContainer">
            <h2>Create Group</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={handleGroupNameChange}
                    className="inputField"
                />
                <br />
                <input
                    type="text"
                    placeholder="Enter member name"
                    value={memberName}
                    onChange={handleMemberNameChange}
                    className="inputField"
                />
                <button type="button" onClick={handleAddMember} className="addMemberButton">Add Member</button>
                <br />
                {members.map((member, index) => (
                    <div key={index} className="memberItem">
                        <span>{member}</span>
                        <button type="button" onClick={() => handleRemoveMember(index)} className="removeMemberButton">Remove</button>
                    </div>
                ))}
                <br />
                <button type="submit" className="submitButton">Add Group</button>
            </form>
        </div>
    );
};

export default AddGroup;
