import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '5px',
            padding: '50px 90px', // Adjusted padding
            maxWidth: '600px',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Register</h1>
                <form>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="text" name="username" value={user.username} placeholder="Username" style={{
                            width: '100%', // Adjusted width
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none',
                        }} />
                        <label style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            pointerEvents: 'none',
                            color: '#999',
                            transition: 'all 0.3s ease',
                            fontSize: '12px',
                        }}>Name</label>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="email" name="email" value={user.email} placeholder="Email" style={{
                            width: '100%', // Adjusted width
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none',
                        }} />
                        <label style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            pointerEvents: 'none',
                            color: '#999',
                            transition: 'all 0.3s ease',
                            fontSize: '12px',
                        }}>Email</label>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="password" name="password" value={user.password} placeholder="Password" style={{
                            width: '100%', // Adjusted width
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none',
                        }} />
                        <label style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            pointerEvents: 'none',
                            color: '#999',
                            transition: 'all 0.3s ease',
                            fontSize: '12px',
                        }}>Password</label>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <input type="password" name="cpassword" placeholder="Confirm Password" style={{
                            width: '100%', // Adjusted width
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            outline: 'none',
                        }} />
                        <label style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            pointerEvents: 'none',
                            color: '#999',
                            transition: 'all 0.3s ease',
                            fontSize: '12px',
                        }}>Confirm Password</label>
                    </div>
                    <input type="submit" value="Sign Up" style={{
                        width: '100%', // Adjusted width
                        border: 'none',
                        outline: 'none',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease',
                    }} />
                    <Link to="/" style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        fontSize: '14px',
                    }}>
                        <div style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Have an Account? Login</div>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Account;
