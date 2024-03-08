import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CssFiles/AddGroup.css";
import Nav from "./Nav";

const AddGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [memberName, setMemberName] = useState('');
    const [members, setMembers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value);
    };

    const handleMemberNameChange = (e) => {
        setMemberName(e.target.value);
    };

    const handleAddMember = () => {
        if (memberName.trim() !== '') {
            setMemberName('');
            setErrorMessage('');
            setMembers([...members, memberName.trim()]);
        }
    };

    return (
        <>
            <Nav/>
            <div className='dashboard-container'>
                <div className='rounded-blocks'>
                    <div className='left-section'>
                       
                    </div>
                    <div className='center-section'>
                        <h2 className='h2'>Create Group</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter group name"
                                value={groupName}
                                className="inputField"
                            />
                            <br/>
                            <input
                                type="text"
                                placeholder="Enter member name"
                                value={memberName}
                                className="inputField"
                            />
                            <button type="button" onClick={handleAddMember} className="addMemberButton">Add Member</button>
                            <br/>
                            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                            {members.map((member, index) => (
                                <div key={index} className="memberItem">
                                    <span>{member}</span>
                                    <button type="button" className="removeMemberButton">Remove</button>
                                </div>
                            ))}
                            <br/>
                            <button type="submit" className="submitButton">Add Group</button>
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

export default AddGroup;
